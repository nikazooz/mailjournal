<?php

use App\User;
use App\Question;
use Faker\Generator as Faker;

$factory->define(Question::class, function (Faker $faker) {
    return [
        'user_id' => factory(User::class),
        'message' => $faker->sentence,
        'frequency' => '* * * * * * *',
    ];
});
