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

Route::redirect('/', '/questions');

Auth::routes(['verify' => true]);

Route::get('/questions', 'QuestionsController@index')->name('questions.index');
Route::get('/questions/create', 'QuestionsController@create')->name('questions.create');
Route::get('/questions/{question}', 'QuestionsController@show')->name('questions.show');
Route::get('/questions/{question}/edit', 'QuestionsController@edit')->name('questions.edit');
Route::put('/questions/{question}', 'QuestionsController@update')->name('questions.update');
Route::post('/questions', 'QuestionsController@store')->name('questions.store');
Route::delete('/questions/{question}', 'QuestionsController@destroy')->name('questions.destroy');


