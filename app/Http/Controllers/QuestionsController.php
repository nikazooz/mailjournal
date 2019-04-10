<?php

namespace App\Http\Controllers;

use App\Question;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class QuestionsController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        return view('questions.index', ['questions' => Question::paginate()]);
    }

    public function show(Request $request, Question $question)
    {
        abort_unless($question->user->is($request->user()), 404);

        return view('questions.show', ['question' => $question->load('entries')]);
    }

    public function create()
    {
        return view('questions.create');
    }

    public function store(Request $request)
    {
        $request->user()->createQuestion($request->validate([
            'message' => ['required', 'string', 'max:191'],
            'expression' => ['required', 'string', 'cron_expression'],
            'timezone' => ['nullable', Rule::in(timezone_identifiers_list())],
        ]));

        return redirect('/questions');
    }

    public function edit( Request $request, Question $question)
    {
        abort_unless($question->user->is($request->user()), 404);

        return view('questions.edit', ['question' => $question]);
    }

    public function update(Request $request, Question $question)
    {
        abort_unless($question->user->is($request->user()), 404);

        $question->update($request->validate([
            'message' => ['required', 'string', 'max:191'],
            'expression' => ['required', 'string', 'cron_expression'],
            'timezone' => ['nullable', Rule::in(timezone_identifiers_list())],
        ]));

        return redirect('/questions');
    }

    public function destroy(Request $request, Question $question)
    {
        abort_unless($question->user->is($request->user()), 404);

        $question->delete();

        return redirect('/questions');
    }
}
