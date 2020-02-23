<?php

namespace App;

use Carbon\CarbonInterface;
use Illuminate\Support\HtmlString;
use App\Services\Email\InboundEmail;
use Stevebauman\Purify\Facades\Purify;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Entry extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['message_id', 'message'];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'replied_at' => 'datetime',
    ];

    /**
     * @var InboundEmail|null
     */
    private $inboundEmail;

    /**
     * Question the entry is for.
     *
     * @return BelongsTo
     */
    public function question(): BelongsTo
    {
        return $this->belongsTo(Question::class);
    }

     /**
     * Scope the query to get only entries for given User.
     *
     * @param  Builder  $query
     * @param  User  $user
     * @return void
     */
    public function scopeForUser(Builder $query, User $user)
    {
        $query->whereHas('question', function ($query) use ($user) {
           $query->forUser($user);
        });
    }

    /**
     * Get question text.
     *
     * @return string
     */
    public function getQuestion(): string
    {
        return $this->question->message;
    }

    /**
     * Get body of entry.
     *
     * @return string
     */
    public function body(): string
    {
        return trim($this->inboundEmail()->body());
    }

    /**
     * Get date the entry was sent at.
     *
     * @return CarbonInterface|null
     */
    public function date(): ?CarbonInterface
    {
        $date = $this->inboundEmail()->date();

        if (!$date) {
            return null;
        }

        return $date->setTimezone($this->question->preferredTimezone());
    }

    /**
     * Get datetime when the questions was sent.
     *
     * @return CarbonInterface
     */
    public function sentAt(): CarbonInterface
    {
        return $this->created_at->setTimezone($this->question->preferredTimezone());
    }

    /**
     * Get inbound email.
     *
     * @return InboundEmail
     */
    private function inboundEmail(): InboundEmail
    {
        if (! $this->message) {
            return InboundEmail::fromMessage('');
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
    public function sanitizedBody(): HtmlString
    {
        return new HtmlString(Purify::clean($this->body()));
    }
}
