@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Edit Question') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('questions.update', $question) }}">
                        @csrf
                        @method('PUT')

                        <div class="form-group row">
                            <label for="message" class="col-md-4 col-form-label text-md-right">{{ __('Message') }}</label>

                            <div class="col-md-6">
                                <input id="message" type="text" class="form-control{{ $errors->has('message') ? ' is-invalid' : '' }}" name="message" value="{{ old('message') ?? $question->message }}" required autofocus>


                                @if ($errors->has('message'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('message') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="expression" class="col-md-4 col-form-label text-md-right">{{ __('CRON expression') }}</label>

                            <div class="col-md-6">
                                <input id="expression" type="text" class="form-control{{ $errors->has('expression') ? ' is-invalid' : '' }}" name="expression" value="{{ old('expression') ?? $question->expression }}" required>

                                @if ($errors->has('expression'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('expression') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="timezone" class="col-md-4 col-form-label text-md-right">{{ __('Timezone') }}</label>

                            <div class="col-md-6">
                                <select id="timezone" type="text" class="form-control{{ $errors->has('timezone') ? ' is-invalid' : '' }}" name="timezone">
                                    <option value="">{{ __('Default') }}</option>
                                    @foreach (timezone_identifiers_list() as $timezone)
                                        <option value="{{ $timezone }}"{{ $question->timezone === $timezone ? 'selected' : '' }}>{{ $timezone }}</option>
                                    @endforeach
                                </select>

                                @if ($errors->has('timezone'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('timezone') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Update') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
