<?php

namespace App;

use App\Mail\QuestionEmail;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Database\Eloquent\Model;
use App\Contracts\HasTimezonePreference;
use Illuminate\Console\Scheduling\Schedule;

class Question extends Model implements HasTimezonePreference
{
    protected $fillable = ['user_id', 'message', 'frequency', 'timezone'];

    /**
     * The user that scheduled the question.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Entries in repliy to the question.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function entries()
    {
        return $this->hasMany(Entry::class);
    }

    /**
     * Scope the query to get only questions defined by the given User.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @param  User  $user
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeForUser($query, User $user)
    {
        return $query->whereHas('user', function ($query) use ($user) {
            return $query->where('user_id', $user->id);
        });
    }

    /**
     * Get the preferred timezone of the entity.
     *
     * @return string|null
     */
    public function preferredTimezone()
    {
        return $this->timezone ?? $this->user->preferredTimezone();
    }

    /**
     * Send the question to the user via email.
     *
     * @return Entry
     */
    public function send()
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
    private function createEntry()
    {
        return $this->entries()->create([
            'message_id' => sprintf('%s@swift.generated', Str::random(32)),
        ])->setRelation('question', $this);
    }

    /**
     * Schedule questions to be sent to the user.
     *
     * @param  Schedule  $schedule
     * @return void
     */
    public static function scheduleAll(Schedule $schedule)
    {
        static::chunk(500, function ($questions) use ($schedule) {
            foreach ($questions as $question) {
                $schedule->call(function() use ($question) {
                    $question->send();
                })->cron($question->frequency)->timezone($question->preferredTimezone());
            }
        });
    }
}
