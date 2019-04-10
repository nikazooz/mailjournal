<?php

namespace App\Http\Controllers;

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

    public function store(Request $request)
    {
        $request->user()->createQuestion($request->validate([
            'message' => ['required', 'string', 'max:191'],
            'expression' => ['required', 'string', 'cron_expression'],
            'timezone' => ['nullable', Rule::in(timezone_identifiers_list())],
        ]));

        return redirect('/questions');
    }

    public function create()
    {
        return view('questions.create');
    }
}
