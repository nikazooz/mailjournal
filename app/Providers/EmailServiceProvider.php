<?php

namespace App\Providers;

use App\Services\Email\Client;
use App\Services\Email\ImapClient;
use Illuminate\Support\Collection;
use Illuminate\Support\ServiceProvider;
use App\Services\Email\Testing\FakeClient;
use App\Services\Email\Testing\InboundEmailFactory;
use Illuminate\Contracts\Support\DeferrableProvider;

class EmailServiceProvider extends ServiceProvider implements DeferrableProvider
{
     /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(Client::class, function ($app) {
            return new ImapClient(
                new Collection($app['config']->get('mail.inbound')),
                $app['log']
            );
        });

        $this->app->bind(FakeClient::class, function ($app) {
            return new FakeClient(new InboundEmailFactory($app['swift.mailer']));
        });
    }

    /**
     * Get the services provided by the provider.
     *
     * @return array
     */
    public function provides()
    {
        return [
            Client::class,
            FakeClient::class,
        ];
    }
}
