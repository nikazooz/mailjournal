<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Question;
use Illuminate\Auth\Access\HandlesAuthorization;
use Symfony\Component\HttpKernel\Exception\HttpException;

class QuestionPolicy
{
    use HandlesAuthorization;

    /**
     * @param  User  $user
     * @param  Question  $question
     * @return bool
     *
     * @throws HttpException
     */
    public function view(User $user, Question $question): bool
    {
        $this->onlyOwner($user, $question);

        return true;
    }

     /**
     * @param  User  $user
     * @param  Question  $question
     * @return bool
     *
     * @throws HttpException
     */
    public function update(User $user, Question $question): bool
    {
        $this->onlyOwner($user, $question);

        return true;
    }

     /**
     * @param  User  $user
     * @param  Question  $question
     * @return bool
     *
     * @throws HttpException
     */
    public function delete(User $user, Question $question): bool
    {
        $this->onlyOwner($user, $question);

        return true;
    }

     /**
     * @param  User  $user
     * @param  Question  $question
     * @return void
     *
     * @throws HttpException
     */
    private function onlyOwner(User $user, Question $question)
    {
        abort_unless($question->user->is($user), 404);
    }
}
