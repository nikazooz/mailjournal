<?php

namespace App;

use Illuminate\Support\HtmlString;
use App\Services\Email\InboundEmail;
use Stevebauman\Purify\Facades\Purify;
use Illuminate\Database\Eloquent\Model;

class Entry extends Model
{
    protected $fillable = ['message_id', 'message'];
    private $inboundEmail;

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
        return new HtmlString(trim($this->inboundEmail()->body()));
    }

    public function date()
    {
        return optional($this->inboundEmail()->date());
    }

    private function inboundEmail()
    {
        if (! $this->message) {
            return optional();
        }

        if (! $this->inboundEmail) {
            $this->inboundEmail = InboundEmail::fromMessage($this->message);
        }

        return $this->inboundEmail;
    }

    public function sanitizedBody()
    {
        return Purify::clean($this->body());
    }
}
