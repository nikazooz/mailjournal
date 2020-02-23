<?php

namespace App\Jobs;

use App\Question;
use Carbon\CarbonInterface;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class SendDueQuestions implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $now;

    /**
     * Create a new job instance.
     *
     * @param  CarbonInterface  $now
     * @return void
     */
    public function __construct(CarbonInterface $now)
    {
        $this->now = $now;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        Question::due($this->now)->enabled()->each(function (Question $question) {
            $question->send();
        }, 300);
    }
}
