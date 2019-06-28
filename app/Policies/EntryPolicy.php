<?php

namespace App\Policies;

use App\User;
use App\Entry;
use Illuminate\Auth\Access\HandlesAuthorization;
use Symfony\Component\HttpKernel\Exception\HttpException;

class EntryPolicy
{
    use HandlesAuthorization;

    /**
     * @param  User  $user
     * @param  Entry  $entry
     * @return bool
     *
     * @throws HttpException
     */
    public function view(User $user, Entry $entry): bool
    {
        abort_unless($entry->question->user->is($user), 404);

        return true;
    }
}
