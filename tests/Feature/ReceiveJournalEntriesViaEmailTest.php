<?php

namespace Tests\Feature;

use App\User;
use App\Question;
use Tests\TestCase;
use App\Mail\QuestionEmail;
use Illuminate\Support\Facades\Mail;
use App\Services\Email\Facades\EmailInbox;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ReceiveJournalEntriesViaEmailTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     */
    public function journal_updates_can_be_submitted_via_email()
    {
        Mail::fake();
        $entry = $this->createQuestion()->send();
        $this->addReplyToInbox($entry->message_id);

        $this->artisan('email:check');

        Mail::assertQueued(QuestionEmail::class, 1);
        Mail::assertQueued(QuestionEmail::class, function ($mailable) {
            return $mailable->hasTo('john@example.com');
        });
        $this->assertEquals('<p>Html body of the email</p>', $entry->fresh()->body());
    }

    /**
     * Create question that will be sent to the user.
     *
     * @return Question
     */
    private function createQuestion()
    {
        return factory(Question::class)->create([
            'message' => 'Test question?',
            'user_id' => factory(User::class)->create([
                'email' => 'john@example.com',
            ])->id,
        ]);
    }

    /**
     * Add reply to our email notification.
     *
     * @param  string  $messageId
     * @return \App\Service\Email\Testing\FakeClient
     */
    private function addReplyToInbox($messageId)
    {
         return EmailInbox::fake()->addToInbox([
            'in-reply-to' => $messageId,
            'from' => 'john@example.com',
            'subject' => 'Re: Test question?',
            'body' => [
                'html' => '<p>Html body of the email</p>',
                'plain' => 'Text body of the email',
            ]
        ]);
    }
}
