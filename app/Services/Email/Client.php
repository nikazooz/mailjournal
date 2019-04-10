<?php

namespace App\Services\Email;

use Illuminate\Support\Collection;

interface Client
{
    /**
     * Get collection of unseen emails.
     *
     * @return InboundEmail[]
     */
    public function getUnseenEmails(): array;
}
