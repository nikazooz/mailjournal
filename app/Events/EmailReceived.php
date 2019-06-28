<?php

namespace App\Events;

use App\Services\Email\InboundEmail;
use Illuminate\Foundation\Events\Dispatchable;

class EmailReceived
{
    use Dispatchable;

    /** @var InboundEmail */
    private $email;

    /**
     * Create a new event instance.
     *
     * @param  InboundEmail  $email
     * @return void
     */
    public function __construct(InboundEmail $email)
    {
        $this->email = $email;
    }

    /**
     * Get inbound email.
     *
     * @return InboundEmail
     */
    public function email(): InboundEmail
    {
        return $this->email;
    }
}
