<?php

namespace App;

use App\Contracts\HasTimezonePreference;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
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
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function questions()
    {
        return $this->hasMany(Question::class);
    }

    /**
     * Get the preferred timezone of the entity.
     *
     * @return string|null
     */
    public function preferredTimezone()
    {
        return $this->timezone;
    }

    /**
     * Get the preferred locale of the entity.
     *
     * @return string|null
     */
    public function preferredLocale()
    {
        return $this->locale;
    }

    /**
     * Create question for the user.
     *
     * @param  array  $attributes
     * @return Question
     */
    public function createQuestion(array $attributes)
    {
        return $this->questions()->create($attributes);
    }

    /**
     * Find user by their email address.
     *
     * @param  string  $email
     * @return self|null
     */
    public static function findByEmail($email)
    {
        return static::where('email', $email)->first();
    }
}
