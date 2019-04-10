<?php

namespace Tests\Feature;

use App\Question;
use Carbon\Carbon;
use Tests\TestCase;
use App\Mail\QuestionEmail;
use Illuminate\Support\Facades\Mail;
use App\Services\Email\Facades\EmailInbox;
use Illuminate\Foundation\Testing\RefreshDatabase;

class SendScheduledQuestionsTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        Mail::fake();
        EmailInbox::fake();

        $this->question = factory(Question::class)->make()->daily()->at('13:00');
        $this->question->save();
    }
    /**
     * @test
     */
    public function questions_are_sent_via_the_email_on_schedule()
    {
        Carbon::setTestNow(Carbon::createFromFormat('H:i', '13:00'));

        $this->artisan('schedule:run');

        Mail::assertQueued(QuestionEmail::class, 1);
        Mail::assertQueued(QuestionEmail::class, function ($mailable) {
            return $mailable->hasTo($this->question->user->email);
        });
    }

    /**
     * @test
     */
    public function questions_are_not_sent_when_its_not_their_time()
    {
        Carbon::setTestNow(Carbon::createFromFormat('H:i', '13:01'));

        $this->artisan('schedule:run');

        Mail::assertNotQueued(QuestionEmail::class);
    }
}
