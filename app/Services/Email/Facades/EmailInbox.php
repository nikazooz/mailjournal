<?php

namespace App\Services\Email\Facades;

use App\Services\Email\Client;
use Illuminate\Support\Facades\Facade;
use App\Services\Email\Testing\FakeClient;

class EmailInbox extends Facade
{
     /**
     * Replace the bound instance with a fake.
     *
     * @return \App\Services\Email\Testing\FakeClient
     */
    public static function fake()
    {
        static::swap($fake = static::getFacadeApplication()->make(FakeClient::class));

        return $fake;
    }

     /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return Client::class;
    }
}
