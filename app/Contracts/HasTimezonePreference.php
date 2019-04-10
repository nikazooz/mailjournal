<?php

namespace App\Contracts;

interface HasTimezonePreference
{
    /**
     * Get the preferred timezone of the entity.
     *
     * @return string|null
     */
    public function preferredTimezone();
}
