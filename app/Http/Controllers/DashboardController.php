<?php

namespace App\Http\Controllers;

use App\Models\Entry;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    /**
     * @param  Request  $request
     * @return \Illuminate\Contracts\Support\Responsable
     */
    public function index(Request $request)
    {
        return Inertia::render('Dashboard/Index', [
            'status' => session('status'),
            'entries' => Entry::forUser($request->user())
                ->with('question')
                ->latest()
                ->take(10)
                ->get()
                ->map(function ($entry) {
                    return [
                        'id' => $entry->id,
                        'question_id' => $entry->question->id,
                        'question_message' => $entry->getQuestion(),
                        'question_sent_at' => $entry->sentAt()->toDateTimeString(),
                        'replied_at' => optional($entry->date())->toDateTimeString(),
                        'reply' => Str::limit(strip_tags((string) $entry->sanitizedBody())),
                    ];
                }),
        ]);
    }
}
