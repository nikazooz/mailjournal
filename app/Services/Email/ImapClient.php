<?php

namespace App\Services\Email;

use Psr\Log\LoggerInterface;
use Zend\Mail\Protocol\Imap;
use Illuminate\Support\Collection;
use ZBateson\MailMimeParser\Message as ParsedMessage;

class ImapClient implements Client
{
    /**  @var Collection */
    private $config;

    /**  @var LoggerInterface */
    private $logger;

    /**
     * @param  Collection  $config
     */
    public function __construct(Collection $config, LoggerInterface $logger)
    {
        $this->config = $config;
        $this->logger = $logger;
    }

    /**
     * Get collection of unseen emails.
     *
     * @return InboundEmail[]
     */
    public function getUnseenEmails(): array
    {
        $emails = [];

        try {
            $imap = $this->loginToInbox();

            // We only want the emails we haven't fetched before.
            foreach ($imap->search(['UNSEEN']) as $id) {
                $data = $imap->fetch(['RFC822.HEADER', 'RFC822.TEXT'], $id);

                // We need to combine headers and text in order to have a full email.
                $emails[] = InboundEmail::fromMessage($data['RFC822.HEADER']."\r\n".$data['RFC822.TEXT']);
            }

            $imap->logout();
        } catch (\Exception $e) {
            // Just log the error and get on with the method execution.
            $this->logger->error($e->getMessage());
        }

        return $emails;
    }

    /**
     * Connect to IMAP server and login to inbox.
     *
     * @return Imap
     */
    private function loginToInbox(): Imap
    {
        return tap($this->connect(), function ($imap) {
            $imap->login($this->config['username'], $this->config['password']);
            $imap->select('INBOX');
        });
    }

    /**
     * Connect to IMAP server.
     *
     * @return Imap
     */
    private function connect(): Imap
    {
        return new Imap(
            $this->config['host'],
            $this->config['port'],
            $this->config['ssl']
        );
    }
}
