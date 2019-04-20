<?php

namespace App\Http\Controllers;

use App\Question;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class QuestionsController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Questions/Index', [
            'questions' => $request->user()->questions()->paginate()->only('id', 'message'),
        ]);
    }

    public function show(Question $question)
    {
        $this->authorize($question);

        return Inertia::render('Questions/Show', [
            'question' => [
                'id' => $question->id,
                'message' => $question->message,
                'expression' => $question->expression,
                'timezone' => $question->timezone,
            ],
            'entries' => $question->entries()->paginate(20, ['*'], 'entries_page')->transform(function ($entry) {
                return [
                    'id' => $entry->id,
                    'reply' => Str::limit(strip_tags((string) $entry->sanitizedBody())),
                    'question_sent_at' => $entry->sentAt()->toDateTimeString(),
                    'replied_at' => optional($entry->date())->toDateTimeString(),
                ];
            }),
        ]);
    }

    public function create()
    {
        return Inertia::render('Questions/Create', [
            'timezones' => timezone_identifiers_list(),
        ]);
    }

    public function store(Request $request)
    {
        $question = $request->user()->createQuestion($request->validate([
            'message' => ['required', 'string', 'max:191'],
            'expression' => ['required', 'string', 'cron_expression'],
            'timezone' => ['nullable', Rule::in(timezone_identifiers_list())],
        ]));

        return redirect()->route('questions.show', $question);
    }

    public function edit(Question $question)
    {
        $this->authorize($question);

        return Inertia::render('Questions/Edit', [
            'question' => $question,
            'timezones' => timezone_identifiers_list(),
        ]);
    }

    public function update(Request $request, Question $question)
    {
        $this->authorize($question);

        $question->update($request->validate([
            'message' => ['required', 'string', 'max:191'],
            'expression' => ['required', 'string', 'cron_expression'],
            'timezone' => ['nullable', Rule::in(timezone_identifiers_list())],
        ]));

        return redirect()->route('questions.show', $question);
    }

    public function destroy(Question $question)
    {
        $this->authorize($question);

        $question->delete();

        return redirect()->route('questions');
    }
}
