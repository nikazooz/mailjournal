<?php

namespace Tests\Feature;

use App\Question;
use Tests\TestCase;
use App\Mail\QuestionEmail;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class HandleScheduledQuestionsTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     */
    public function questions_are_sent_via_the_email_on_schedule()
    {
        Mail::fake();
        Date::setTestNow(Date::createFromFormat('H:i', '13:00'));

        $question = factory(Question::class)->make()->daily()->at('13:00');
        $question->save();
        // Since the app is already bootstrapped we need to add question to the schedule manually.
        $question->addToSchedule(app(Schedule::class));

        $this->artisan('schedule:run');

        Mail::assertQueued(QuestionEmail::class, 1);
        Mail::assertQueued(QuestionEmail::class, function ($mailable) use ($question) {
            return $mailable->hasTo($question->user->email);
        });
    }

    /**
     * @test
     */
    public function questions_are_not_sent_when_its_not_their_time()
    {
        Mail::fake();
        Date::setTestNow(Date::createFromFormat('H:i', '13:01'));

        $question = factory(Question::class)->make()->daily()->at('13:00');
        $question->save();
        // Since the app is already bootstrapped we need to add question to the schedule manually.
        $question->addToSchedule(app(Schedule::class));

        $this->artisan('schedule:run');

        Mail::assertNotQueued(QuestionEmail::class);
    }
}
