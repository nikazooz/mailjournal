<?php

namespace App\Mail;

use App\Entry;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class QuestionEmail extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    /**
     * @var Entry
     */
    public $entry;

    /**
     * @var string
     */
    private $messageId;

    /**
     * Create a new message instance.
     *
     * @param  Entry  $entry
     * @param  string  $messageId
     * @return void
     */
    public function __construct(Entry $entry, $messageId)
    {
        $this->entry = $entry;
        $this->messageId = $messageId;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.question')
            ->from(config('mail.from.address'), config('app.name'))
            ->replyTo(config('mail.inbound.address'), config('app.name'))
            ->subject($this->entry->getQuestion())
            ->withSwiftMessage(function ($message) {
                $message->setId($this->messageId);
            });
    }
}
