<?php

namespace App\Policies;

use App\User;
use App\Question;
use Illuminate\Auth\Access\HandlesAuthorization;

class QuestionPolicy
{
    use HandlesAuthorization;

    public function view(User $user, Question $question)
    {
        $this->onlyOwner($user, $question);

        return true;
    }

    public function update(User $user, Question $question)
    {
        $this->onlyOwner($user, $question);

        return true;
    }

    public function delete(User $user, Question $question)
    {
        $this->onlyOwner($user, $question);

        return true;
    }

    private function onlyOwner(User $user, Question $question)
    {
        abort_unless($question->user->is($user), 404);
    }
}
