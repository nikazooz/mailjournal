<?php

namespace App\Services\Email\Testing;

use Illuminate\Mail\Message;
use App\Services\Email\InboundEmail;
use Illuminate\Contracts\Support\Htmlable;

class InboundEmailFactory
{
    /**
     * @var \Swift_Mailer
     */
    private $swift;

    public function __construct(\Swift_Mailer $swift)
    {
        $this->swift = $swift;
    }

    /**
     * Create inbound email from given attributes.
     *
     * @param  array  $attributes
     * @return InboundEmail
     */
    public function create(array $attributes)
    {
        $message = new Message($this->swift->createMessage('message'));

        $this->fill($message, $attributes);

        $rawMessage = $message->getSwiftMessage()->toString();

        return InboundEmail::fromMessage($rawMessage);
    }

    private function fill($message, $attributes)
    {
        $message->from($attributes['from'] ?? null, $attributes['from_name'] ?? null)
                ->to(config('mail.inbound.address'))
                ->subject($attributes['subject'] ?? null);

        if (isset($attributes['in-reply-to'])) {
            $message->getHeaders()->addIdHeader('In-Reply-To', $attributes['in-reply-to']);
        }

        list($html, $plain, $raw) = $this->body($attributes['body'] ?? []);

        $this->addContent($message, $html, $plain, $raw);
    }

    private function body($body = [])
    {
        return [
            $body['html'] ?? null,
            $body['plain'] ?? null,
            $body['raw'] ?? null
        ];
    }

    /**
     * Add the content to a given message.
     *
     * @param  \Illuminate\Mail\Message  $message
     * @param  string  $html
     * @param  string  $plain
     * @param  string  $raw
     * @return void
     */
    protected function addContent($message, $html, $plain, $raw)
    {
        if (isset($html)) {
            $message->setBody($html, 'text/html');
        }

        if (isset($plain)) {
            $method = isset($html) ? 'addPart' : 'setBody';

            $message->$method($plain, 'text/plain');
        }

        if (isset($raw)) {
            $method = (isset($html) || isset($plain)) ? 'addPart' : 'setBody';

            $message->$method($raw, 'text/plain');
        }
    }
}
