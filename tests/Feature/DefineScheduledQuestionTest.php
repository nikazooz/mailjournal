<?php

namespace Tests\Feature;

use App\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class DefineScheduledQuestionTest extends TestCase
{
    /**
     * @test
     */
    public function guests_cannot_open_the_page_to_create_question()
    {
        $this->get('/questions/create')->assertRedirect('/login');
    }

    /**
     * @test
     */
    public function correct_view_is_presented_for_creating_questions()
    {
        $this->actingAs(factory(User::class)->create())
             ->get('/questions/create')
             ->assertViewIs('questions.create');
    }

    /**
     * @test
     */
    public function guests_cannot_create_questions()
    {
        $this->post('/questions', [
            'message' => 'Some question?',
            'frequency' => '0 0 19 1/1 * ? *', // Every day at 19:00
            'timezone' => 'Europe/Belgrade',
        ])->assertRedirect('/login');

        $this->assertDatabaseMissing('questions', [
            'message' => 'Some question?',
            'frequency' => '0 0 19 1/1 * ? *',
            'timezone' => 'Europe/Belgrade',
        ]);
    }

    /**
     * @test
     */
    public function authenticated_user_can_schedule_question_to_be_sent()
    {
        $this->handleValidationExceptions();
        $user = factory(User::class)->create();

        $this->actingAs($user)->post('/questions', [
            'message' => 'Some question?',
            'frequency' => '0 0 19 1/1 * ? *', // Every day at 19:00
            'timezone' => 'Europe/Belgrade',
        ])->assertRedirect('/questions');

        $this->assertDatabaseHas('questions', [
            'user_id' => $user->id,
            'message' => 'Some question?',
            'frequency' => '0 0 19 1/1 * ? *',
            'timezone' => 'Europe/Belgrade',
        ]);
    }
}
