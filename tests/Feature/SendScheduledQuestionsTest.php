<?php

namespace Tests\Feature;

use App\Question;
use Tests\TestCase;
use App\Mail\QuestionEmail;
use Illuminate\Support\Facades\Date;
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

        $this->question = $this->createQuestion();
    }
    /**
     * @test
     */
    public function questions_are_sent_via_the_email_on_schedule()
    {
        Date::setTestNow(Date::createFromFormat('H:i', '13:00')->addDay());

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
        Date::setTestNow(Date::createFromFormat('H:i', '12:59'));

        $this->artisan('schedule:run');

        Mail::assertNotQueued(QuestionEmail::class);
    }

    /**
     * @test
     */
    public function multiple_questions_can_be_processed()
    {
        Date::setTestNow(Date::createFromFormat('Y-m-d H:i', '2019-08-28 10:00')->setTimezone('UTC'));

        $question1 = tap(factory(Question::class)->make(['timezone' => 'UTC'])->daily()->at('13:00'))->save();
        $question2 = tap(factory(Question::class)->make(['timezone' => 'CET'])->daily()->at('14:00'))->save();
        $question3 = tap(factory(Question::class)->make(['timezone' => 'CET'])->daily()->at('15:00'))->save();

        Date::setTestNow(Date::createFromFormat('Y-m-d H:i', '2019-08-28 13:00')->setTimezone('UTC'));

        $this->artisan('schedule:run');

        Mail::assertQueued(QuestionEmail::class, function ($mailable) use ($question1) {
            return $mailable->hasTo($question1->user->email);
        });

        Mail::assertQueued(QuestionEmail::class, function ($mailable) use ($question2) {
            return $mailable->hasTo($question2->user->email);
        });

        Mail::assertNotQueued(QuestionEmail::class, function ($mailable) use ($question3) {
            return $mailable->hasTo($question3->user->email);
        });
    }

    /** @test */
    public function question_is_not_sent_duplicated()
    {
        Date::setTestNow(Date::createFromFormat('H:i:s', '13:00:00')->addDay());

        $this->artisan('schedule:run');

        Date::setTestNow(Date::now()->addSeconds(40));

        $this->artisan('schedule:run');

        Mail::assertQueued(QuestionEmail::class, 1);
    }

    protected function createQuestion()
    {
        return tap(factory(Question::class)->make()->daily()->at('13:00'))->save();
    }
}
