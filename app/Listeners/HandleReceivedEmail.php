<?php

namespace App\Listeners;

use App\User;
use App\Entry;
use App\Events\EmailReceived;
use App\Services\Email\InboundEmail;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class HandleReceivedEmail implements ShouldQueue
{
    use InteractsWithQueue;

    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  EmailReceived  $event
     * @return void
     */
    public function handle(EmailReceived $event)
    {
        $email = $event->email();

        $user = User::findByEmail($email->from());
        $messageId = $email->headerValue('In-Reply-To');

        if ($user && $messageId) {
             Entry::query()
                ->forUser($user)
                ->where('message_id', $messageId)
                ->update(['message' => $email->rawMessage()]);
        }
    }
}
