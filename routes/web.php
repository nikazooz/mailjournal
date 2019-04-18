<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::redirect('/', '/dashboard');

// Auth
Route::auth([
    'register' => false,
    'verify' => true,
]);

Route::middleware('auth', 'verified')->group(function () {
    // Dashboard
    Route::get('/dashboard')->name('dashboard')->uses('DashboardController@index');

    // Questions
    Route::get('/questions')->name('questions')->uses('QuestionsController@index')->middleware('remember');
    Route::get('/questions/create')->name('questions.create')->uses('QuestionsController@create');
    Route::get('/questions/{question}')->name('questions.show')->uses('QuestionsController@show');
    Route::get('/questions/{question}/edit')->name('questions.edit')->uses('QuestionsController@edit');
    Route::put('/questions/{question}')->name('questions.update')->uses('QuestionsController@update');
    Route::post('/questions')->name('questions.store')->uses('QuestionsController@store');
    Route::delete('/questions/{question}')->name('questions.destroy')->uses('QuestionsController@destroy');

    Route::get('/entries/{entry}')->name('entries.show')->uses('EntriesController@show')->middleware('can:view,entry');
});
