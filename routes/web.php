<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\EntriesController;
use App\Http\Controllers\QuestionsController;
use Illuminate\Support\Facades\Route;

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
    Route::get('/dashboard')->name('dashboard')->uses([DashboardController::class, 'index']);

    // Questions
    Route::get('/questions')->name('questions')->uses([QuestionsController::class, 'index'])->middleware('remember');
    Route::get('/questions/create')->name('questions.create')->uses([QuestionsController::class, 'create']);
    Route::get('/questions/{question}')->name('questions.show')->uses([QuestionsController::class, 'show']);
    Route::get('/questions/{question}/edit')->name('questions.edit')->uses([QuestionsController::class, 'edit']);
    Route::put('/questions/{question}')->name('questions.update')->uses([QuestionsController::class, 'update']);
    Route::post('/questions')->name('questions.store')->uses([QuestionsController::class, 'store']);
    Route::delete('/questions/{question}')->name('questions.destroy')->uses([QuestionsController::class, 'destroy']);

    Route::get('/entries/{entry}')->name('entries.show')->uses([EntriesController::class, 'show'])->middleware('can:view,entry');
});
