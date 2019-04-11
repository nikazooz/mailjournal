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

// Dashboard
Route::get('/dashboard')->name('dashboard')->uses('DashboardController@index')->middleware('auth');

// Auth
Route::get('login')->name('login')->uses('Auth\LoginController@showLoginForm');
Route::post('login')->name('login.attempt')->uses('Auth\LoginController@login');
Route::get('logout')->name('logout')->uses('Auth\LoginController@logout');

Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
Route::post('password/reset', 'Auth\ResetPasswordController@reset')->name('password.update');

// Questions
Route::get('/questions')->name('questions')->uses('QuestionsController@index')->middleware('remember', 'auth');
Route::get('/questions/create')->name('questions.create')->uses('QuestionsController@create')->middleware('auth');
Route::get('/questions/{question}')->name('questions.show')->uses('QuestionsController@show')->middleware('auth');
Route::get('/questions/{question}/edit')->name('questions.edit')->uses('QuestionsController@edit')->middleware('auth');
Route::put('/questions/{question}')->name('questions.update')->uses('QuestionsController@update')->middleware('auth');
Route::post('/questions')->name('questions.store')->uses('QuestionsController@store')->middleware('auth');
Route::delete('/questions/{question}')->name('questions.destroy')->uses('QuestionsController@destroy')->middleware('auth');

Route::get('/entries/{entry}')->name('entries.show')->uses('EntriesController@show')->middleware('auth', 'can:view,entry');
