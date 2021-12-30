<?php

namespace App\Services\Email;

use Carbon\CarbonInterface;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\Mail;
use Psr\Http\Message\StreamInterface;
use EmailReplyParser\EmailReplyParser;
use Illuminate\Contracts\Mail\Mailable;
use ZBateson\MailMimeParser\Header\AddressHeader;
use ZBateson\MailMimeParser\Message as MimeMessage;
use ZBateson\MailMimeParser\Header\Part\AddressPart;

class InboundEmail
{
    /** @var MimeMessage */
    private $mimeMessage;

    /** @var string */
    private $message;

    private function __construct($message)
    {
        $this->message = $message;
    }

    public static function fromMessage($message)
    {
        return new static($message);
    }

    public function id(): string
    {
        return $this->message()->getHeaderValue('Message-Id', Str::random());
    }

    public function date(): ?CarbonInterface
    {
        return Date::make($this->message()->getHeaderValue('Date'));
    }

    public function text(): ?string
    {
        return $this->message()->getTextContent();
    }

    public function visibleText(): ?string
    {
        return EmailReplyParser::parseReply($this->text());
    }

    public function html(): ?string
    {
        return $this->message()->getHtmlContent();
    }

    public function headerValue($headerName): ?string
    {
        return $this->message()->getHeaderValue($headerName, null);
    }

    public function subject(): ?string
    {
        return $this->message()->getHeaderValue('Subject');
    }

    public function from(): string
    {
        $from = $this->message()->getHeader('From');

        if ($from instanceof AddressHeader) {
            return $from->getEmail();
        }

        return '';
    }

    public function fromName(): string
    {
        $from = $this->message()->getHeader('From');

        if ($from instanceof AddressHeader) {
            return $from->getPersonName();
        }

        return '';
    }

    /**
     * @return AddressPart[]
     */
    public function to(): array
    {
        return $this->convertAddressHeader($this->message()->getHeader('To'));
    }

    /**
     * @return AddressPart[]
     */
    public function cc(): array
    {
        return $this->convertAddressHeader($this->message()->getHeader('Cc'));
    }

    private function convertAddressHeader($header): array
    {
        if ($header instanceof AddressHeader) {
            return Collection::make($header->getAddresses())->toArray();
        }

        return [];
    }

    /**
     * @return StreamInterface[]
     */
    public function attachments()
    {
        return array_map(function ($attachmentPart) {
            return $attachmentPart->getContentStream();
        }, $this->message()->getAllAttachmentParts());
    }

    public function message(): MimeMessage
    {
        if (! $this->mimeMessage) {
            $this->mimeMessage = MimeMessage::from($this->message, true);
        }

        return $this->mimeMessage;
    }

    public function rawMessage()
    {
        return $this->message;
    }

    public function reply(Mailable $mailable)
    {
        if ($mailable instanceof \Illuminate\Mail\Mailable) {
            $mailable->withSwiftMessage(function (\Swift_Message $message) {
                $message->getHeaders()->addIdHeader('In-Reply-To', $this->id());
            });
        }

        return Mail::to($this->from())->send($mailable);
    }

    public function body(): ?string
    {
        return $this->isHtml() ? $this->html() : $this->text();
    }

    public function isHtml(): bool
    {
        return ! empty($this->html());
    }

    public function isText(): bool
    {
        return ! empty($this->text());
    }

    public function isValid(): bool
    {
        return $this->from() !== '' && ($this->isText() || $this->isHtml());
    }
}
