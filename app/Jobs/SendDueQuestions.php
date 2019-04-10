<?php

namespace App\Jobs;

use App\Question;
use Carbon\Carbon;
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
     * @return void
     */
    public function __construct(Carbon $now)
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
        Question::chunk(300, function ($questions) {
            $questions->filter->isDue($this->now->copy())->each->send();
        });
    }
}
