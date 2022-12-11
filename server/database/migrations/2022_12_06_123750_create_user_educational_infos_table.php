<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_educational_infos', function (Blueprint $table) {
            $table->id();
            $table->string('user_id')->nullable();
            $table->string('ssc_passing_year')->nullable();
            $table->string('hsc_passing_year')->nullable();
            $table->string('bsc_passing_year')->nullable();
            $table->string('msc_passing_year')->nullable();
            $table->string('ssc_institution')->nullable();
            $table->string('hsc_institution')->nullable();
            $table->string('bsc_institution')->nullable();
            $table->string('msc_institution')->nullable();
            $table->string('ssc_grade')->nullable();
            $table->string('hsc_grade')->nullable();
            $table->string('bsc_grade')->nullable();
            $table->string('msc_grade')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_educational_infos');
    }
};
