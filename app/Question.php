<?php

namespace App;

use App\Mail\QuestionEmail;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $fillable = ['user_id', 'message'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function entries()
    {
        return $this->hasMany(Entry::class);
    }

    public function scopeForUser($query, User $user)
    {
        return $query->whereHas('user', function ($query) use ($user) {
            return $query->where('user_id', $user->id);
        });
    }

    public function send()
    {
        return DB::transaction(function () {
            $messageId = sprintf('%s@swift.generated', Str::random(32));

            $entry = $this->entries()->create(['message_id' => $messageId]);

            $entry->setRelation('question', $this);

            Mail::to($this->user)->send(new QuestionEmail($entry, $messageId));

            return $entry;
        });
    }
}
