@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Question Details') }}</div>

                <div class="card-body">
                    <div class="form-group row">
                        <label for="message" class="col-md-4 col-form-label text-md-right">{{ __('Message') }}</label>

                        <div class="col-md-6">
                            <div id="message" class="form-control border-0">{{ $question->message }}</div>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="expression" class="col-md-4 col-form-label text-md-right">{{ __('CRON expression') }}</label>

                        <div class="col-md-6">
                            <div id="expression" class="form-control border-0">{{ $question->expression }}</div>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="timezone" class="col-md-4 col-form-label text-md-right">{{ __('Timezone') }}</label>

                        <div class="col-md-6">
                            <div id="timezone" class="form-control border-0">{{ $question->timezone ?? __('Default') }}</div>
                        </div>
                    </div>

                    <div class="form-group row mb-0">
                        <div class="col-md-6 offset-md-4 d-flex">
                            <a href="{{ route('questions.edit', $question) }}" class="btn btn-primary mr-2">
                                {{ __('Edit') }}
                            </a>

                            <button type="button" class="btn btn-outline-danger" data-toggle="modal" data-target="#deleteModal">
                                {{ __('Delete') }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    @if ($question->entries->isNotEmpty())
        <div class="row justify-content-center mt-4">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ __('Answers') }}</div>

                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col" class="border-top-0">Question Sent At</th>
                                <th scope="col" class="border-top-0">Answer</th>
                                <th scope="col" class="border-top-0">Replied At</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($question->entries as $entry)
                                <tr>
                                    <td>{{ $entry->sentAt()->format('F j, Y H:i') }}</td>
                                    <td>{{ $entry->sanitizedBody() }}</td>
                                    <td>{{ optional($entry->date())->format('F j, Y H:i') }}</td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    @endif
</div>

<!-- Modal -->
<div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="deleteModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="deleteModalLabel">{{ __('Delete Question') }}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="{{ __('Close') }}">
                  <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                {{ __('Are you sure you want to delete this question?') }}
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">{{ __('Close') }}</button>

                <form method="POST" action="{{ route('questions.destroy', $question) }}">
                    @csrf
                    @method('DELETE')

                    <button type="submit" class="btn btn-danger">{{ __('Delete') }}</button>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection
