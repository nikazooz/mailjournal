<?php

namespace App\Services\Email\Testing;

use App\Services\Email\Client;
use App\Services\Email\InboundEmail;

class FakeClient implements Client
{
    /** @var InboundEmail[] */
    private $unseenEmails = [];

    /** @var InboundMailFactory */
    private $factory;

    public function __construct(InboundEmailFactory $factory)
    {
        $this->factory = $factory;
    }

    /**
     * Add new email to inbox.
     *
     * @param  InboundEmail|array  $email
     * @return self
     */
    public function addToInbox($email)
    {
        if (is_array($email)) {
            $email = $this->factory->create($email);
        }

        $this->unseenEmails[] = $email;

        return $this;
    }

    /**
     * Get collection of unseen emails.
     *
     * @return InboundEmail[]
     */
    public function getUnseenEmails(): array
    {
        return $this->unseenEmails;
    }
}
