<?php

namespace App\Services\Email;

interface Client
{
    /**
     * Get collection of unseen emails.
     *
     * @return InboundEmail[]
     */
    public function getUnseenEmails(): array;
}
