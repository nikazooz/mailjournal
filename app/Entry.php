<?php

namespace App;

use App\Services\Email\InboundEmail;
use Stevebauman\Purify\Facades\Purify;
use Illuminate\Database\Eloquent\Model;

class Entry extends Model
{
    protected $fillable = ['message_id', 'message'];

    public function question()
    {
        return $this->belongsTo(Question::class);
    }

    public function scopeForUser($query, User $user)
    {
        return $query->whereHas('question', function ($query) use ($user) {
            return $query->forUser($user);
        });
    }

    public function getQuestion()
    {
        return $this->question->message;
    }

    public function body()
    {
        return trim(InboundEmail::fromMessage($this->message)->body());
    }

    public function sanitizedBody()
    {
        return Purify::clean($this->body());
    }
}
