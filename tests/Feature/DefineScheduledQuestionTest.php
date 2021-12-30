<?php

namespace Tests\Feature;

use App\Models\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class DefineScheduledQuestionTest extends TestCase
{
    use RefreshDatabase;

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
        $this->actingAs(User::factory()->create())
             ->get('/questions/create')
             ->assertViewIs('app')
             ->assertViewHas('page', function ($page) {
                return $page['component'] === 'Questions/Create' && is_array($page['props']['timezones']);
             });
    }

    /**
     * @test
     */
    public function guests_cannot_create_questions()
    {
        $this->post('/questions', $this->validParams())->assertRedirect('/login');

        $this->assertDatabaseMissing('questions', [
            'message' => 'Test question?',
            'expression' => '0 19 1/1 * ?',
            'timezone' => 'Europe/Belgrade',
        ]);
    }

    /**
     * @test
     */
    public function authenticated_user_can_schedule_question_to_be_sent()
    {
        $user = User::factory()->create();

        $this->actingAs($user)
            ->post('/questions', $this->validParams())
            ->assertRedirect()
            ->assertSessionHasNoErrors();

        $this->assertDatabaseHas('questions', $this->validParams([
            'user_id' => $user->id,
            'message' => 'Test question?',
            'expression' => '0 19 1-31/1 * *',
            'timezone' => 'Europe/Belgrade',
        ]));
    }

    private function validParams($overrides = [])
    {
        return array_merge([
            'message' => 'Test question?',
            'expression' => '0 19 1-31/1 * *', // Every day at 19:00
            'timezone' => 'Europe/Belgrade',
        ], $overrides);
    }
}
