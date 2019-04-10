<?php

namespace App;

use Illuminate\Support\HtmlString;
use App\Services\Email\InboundEmail;
use Stevebauman\Purify\Facades\Purify;
use Illuminate\Database\Eloquent\Model;

class Entry extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['message_id', 'message'];

    /**
     * @var InboundEmail|null
     */
    private $inboundEmail;

    /**
     * Question the entry is for.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function question()
    {
        return $this->belongsTo(Question::class);
    }

     /**
     * Scope the query to get only entries for given User.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @param  User  $user
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeForUser($query, User $user)
    {
        return $query->whereHas('question', function ($query) use ($user) {
            return $query->forUser($user);
        });
    }

    /**
     * Get question text.
     *
     * @return string
     */
    public function getQuestion()
    {
        return $this->question->message;
    }

    /**
     * Get body of entry.
     *
     * @return string
     */
    public function body()
    {
        return trim($this->inboundEmail()->body());
    }

    /**
     * Get date the entry was sent at.
     *
     * @return \DateTimeInterface|null
     */
    public function date()
    {
        if ($date = $this->inboundEmail()->date()) {
            return $date->setTimezone($this->question->preferredTimezone());
        }
    }

    /**
     * Get datetime when the questions was sent.
     *
     * @return \DateTimeInterface
     */
    public function sentAt()
    {
        return $this->created_at->setTimezone($this->question->preferredTimezone());
    }

    /**
     * Get inbound email.
     *
     * @return InboundEmail|\Illuminate\Support\Optional
     */
    private function inboundEmail()
    {
        if (! $this->message) {
            return optional();
        }

        if (! $this->inboundEmail || $this->inboundEmail->rawMessage() !== $this->message) {
            $this->inboundEmail = InboundEmail::fromMessage($this->message);
        }

        return $this->inboundEmail;
    }

    /**
     * Get sanitized body of the entry.
     *
     * @return HtmlString
     */
    public function sanitizedBody()
    {
        return new HtmlString(Purify::clean($this->body()));
    }
}
