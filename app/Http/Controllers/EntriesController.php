<?php

namespace App\Http\Controllers;

use App\Models\Entry;
use Inertia\Inertia;

class EntriesController extends Controller
{
    /**
     * @param  Entry  $entry
     * @return \Illuminate\Contracts\Support\Responsable
     */
    public function show(Entry $entry)
    {
        $this->authorize($entry);

        return Inertia::render('Entries/Show', [
            'entry' => [
                'id' => $entry->id,
                'question_id' => $entry->question_id,
                'reply' => (string) $entry->sanitizedBody(),
                'question_sent_at' => $entry->sentAt()->toDateTimeString(),
                'replied_at' => optional($entry->date())->toDateTimeString(),
            ],
        ]);
    }
}
