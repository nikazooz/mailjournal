<?php

namespace App\Listeners;

use App\Models\User;
use App\Models\Entry;
use App\Events\EmailReceived;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class AttachReceivedEmailToEntry implements ShouldQueue
{
    use InteractsWithQueue;

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
                ->update([
                    'message' => $email->rawMessage(),
                ]);
        }
    }
}
