<?php

namespace App;

use App\Contracts\HasTimezonePreference;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Contracts\Translation\HasLocalePreference;

class User extends Authenticatable implements HasLocalePreference,
                                              HasTimezonePreference,
                                              MustVerifyEmail
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * User can schedule many questions.
     *
     * @return HasMany
     */
    public function questions(): HasMany
    {
        return $this->hasMany(Question::class);
    }

    /**
     * Get the preferred timezone of the entity.
     *
     * @return string|null
     */
    public function preferredTimezone(): ?string
    {
        return $this->timezone;
    }

    /**
     * Get the preferred locale of the entity.
     *
     * @return string|null
     */
    public function preferredLocale(): ?string
    {
        return $this->locale;
    }

    /**
     * Create question for the user.
     *
     * @param  array  $attributes
     * @return Question
     */
    public function createQuestion(array $attributes): Question
    {
        return $this->questions()->create($attributes);
    }

    /**
     * Find user by their email address.
     *
     * @param  string  $email
     * @return self|null
     */
    public static function findByEmail($email): ?self
    {
        return static::where('email', $email)->first();
    }
}
