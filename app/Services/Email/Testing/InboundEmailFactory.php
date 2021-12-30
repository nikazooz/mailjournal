<?php

namespace App\Services\Email\Testing;

use App\Services\Email\InboundEmail;
use Illuminate\Support\Str;
use Symfony\Component\Mime\Address;
use Symfony\Component\Mime\Email;

class InboundEmailFactory
{
    protected $inboundAddress;

    public function __construct(string $inboundAddress)
    {
        $this->inboundAddress = $inboundAddress;
    }

    /**
     * Create inbound email from given attributes.
     *
     * @param  array  $attributes
     * @return InboundEmail
     */
    public function create(array $attributes): InboundEmail
    {
        return InboundEmail::fromMessage($this->fill(new Email(), $attributes)->toString());
    }

    /**
     * Fill the message with received content.
     *
     * @param  Email  $message
     * @param  array $attributes
     * @return Email
     */
    private function fill(Email $message, array $attributes)
    {
        $message->to($this->inboundAddress);

        if (isset($attributes['from'])) {
            $message->from(new Address($attributes['from'], $attributes['from_name'] ?? ''));
        }

        if (isset($attributes['subject'])) {
            $message->subject($attributes['subject']);
        }

        if (isset($attributes['in-reply-to'])) {
            $message->getHeaders()->addHeader('In-Reply-To', $attributes['in-reply-to']);
        }

        $message->getHeaders()->addIdHeader('Message-Id', Str::random().'@swift.generated');

        list($html, $plain) = $this->body($attributes['body'] ?? []);

        $message->text($plain)->html($html);

        return $message;
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
        ];
    }
}
