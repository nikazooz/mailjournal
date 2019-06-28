<?php

namespace App\Services\Email\Testing;

use Swift_Mailer;
use Illuminate\Mail\Message;
use App\Services\Email\InboundEmail;

class InboundEmailFactory
{
    /** @var Swift_Mailer */
    private $swift;

    /**
     * @param  Swift_Mailer  $swift
     */
    public function __construct(Swift_Mailer $swift)
    {
        $this->swift = $swift;
    }

    /**
     * Create inbound email from given attributes.
     *
     * @param  array  $attributes
     * @return InboundEmail
     */
    public function create(array $attributes): InboundEmail
    {
        $message = new Message($this->swift->createMessage('message'));

        $this->fill($message, $attributes);

        $rawMessage = $message->getSwiftMessage()->toString();

        return InboundEmail::fromMessage($rawMessage);
    }

    /**
     * Fill the message with received content.
     *
     * @param  Message  $message
     * @param  array $attributes
     * @return void
     */
    private function fill(Message $message, array $attributes)
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

    /**
     * Get different versions of body.
     *
     * @param  array  $body
     * @return array
     */
    private function body(array $body = []): array
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
     * @param  Message  $message
     * @param  string|null  $html
     * @param  string|null  $plain
     * @param  string|null  $raw
     * @return void
     */
    protected function addContent(Message $message = null, string $html = null, string $plain = null, string $raw = null)
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
