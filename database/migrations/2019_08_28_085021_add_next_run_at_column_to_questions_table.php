<?php

use App\Question;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddNextRunAtColumnToQuestionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('questions', function (Blueprint $table) {
            $table->datetime('next_run_at')->nullable()->after('expression');
        });

        $now = Date::now();

        // Update existing questions and fill the next run date based on
        Question::eachById(function ($question) use ($now) {
            $question->timestamps = false;
            $question->fillNextRunDate(true, $now)->save();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('questions', function (Blueprint $table) {
            $table->dropColumn('next_run_at');
        });
    }
}
