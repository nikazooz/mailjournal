<?php

namespace App\Console\Commands;

use App\Events\EmailReceived;
use App\Services\Email\Client;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use Facades\App\Service\Email\EmailInbox;

class CheckEmail extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'email:check';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Check if there are new emails and parse them as responses to sent questions.';

    /**
     * @var Client
     */
    private $emailClient;

    /**
     * Create command instance.
     *
     * @param  Client  $emailClient
     * @return void
     */
    public function __construct(Client $emailClient)
    {
        parent::__construct();

        $this->emailClient = $emailClient;
    }

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function handle()
    {
        foreach ($this->emailClient->getUnseenEmails() as $email) {
            EmailReceived::dispatch($email);
        }
    }
}
