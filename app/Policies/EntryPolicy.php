<?php

namespace App\Policies;

use App\User;
use App\Entry;
use Illuminate\Auth\Access\HandlesAuthorization;

class EntryPolicy
{
    use HandlesAuthorization;

    public function view(User $user, Entry $entry)
    {
        abort_unless($entry->question->user->is($user), 404);

        return true;
    }
}
