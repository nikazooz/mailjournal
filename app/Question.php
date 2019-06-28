<?php

namespace App;

use Cron\CronExpression;
use App\Mail\QuestionEmail;
use Carbon\CarbonInterface;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\Mail;
use Illuminate\Database\Eloquent\Model;
use App\Contracts\HasTimezonePreference;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Console\Scheduling\ManagesFrequencies;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Question extends Model implements HasTimezonePreference
{
    use ManagesFrequencies;

     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['user_id', 'message', 'expression', 'timezone'];

    /**
     * The user that scheduled the question.
     *
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Entries in repliy to the question.
     *
     * @return HasMany
     */
    public function entries(): HasMany
    {
        return $this->hasMany(Entry::class);
    }

    /**
     * Scope the query to get only questions defined by the given User.
     *
     * @param  Builder  $query
     * @param  User  $user
     * @return void
     */
    public function scopeForUser(Builder $query, User $user)
    {
        $query->whereHas('user', function ($query) use ($user) {
            $query->where('user_id', $user->id);
        });
    }

    /**
     * Get the preferred timezone of the entity.
     *
     * @return string|null
     */
    public function preferredTimezone(): ?string
    {
        return $this->attributes['timezone'] ?? $this->user->preferredTimezone();
    }

    /**
     * Send the question to the user via email.
     *
     * @return Entry
     */
    public function send(): Entry
    {
        return DB::transaction(function () {
            $entry = $this->createEntry();

            Mail::to($this->user)->send(new QuestionEmail($entry));

            return $entry;
        });
    }

    /**
     * Prepare the new entry that we expect to be filled.
     *
     * @return Entry
     */
    private function createEntry(): Entry
    {
        return $this->entries()->create([
            'message_id' => sprintf('%s@swift.generated', Str::random(32)),
        ])->setRelation('question', $this);
    }

     /**
     * Determine if the question should sent based on the Cron expression.
     *
     * @param  CarbonInterface  $date
     * @return bool
     */
    public function isDue(CarbonInterface $date): bool
    {
        if ($timezone = $this->preferredTimezone()) {
            $date = $date->setTimezone($timezone);
        }

        return CronExpression::factory($this->expression)->isDue($date);
    }
}
