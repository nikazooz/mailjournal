@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">
                    <span>{{ __('Questions') }}</span>
                </div>

                <ul class="list-group list-group-flush">
                    @foreach ($questions as $question)
                        <a href="{{ route('questions.show', $question) }}" class="list-group-item list-group-item-action">{{ $question->message }}</a>
                    @endforeach
                </ul>

                <div class="card-body text-center">
                    <a href="{{ route('questions.create') }}" class="btn btn-primary">
                        {{ __('Add') }}
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
