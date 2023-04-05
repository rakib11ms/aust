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
        Schema::create('organization_set_ups', function (Blueprint $table) {
            $table->id();
            $table->string('organization_name')->nullable();
            $table->longText('organization_address')->nullable();
            $table->string('district')->nullable();
            $table->string('thana')->nullable();
            $table->string('post_code')->nullable();
            $table->string('est_date')->nullable();
            $table->string('founder_name')->nullable();
            $table->string('current_chairman_name')->nullable();
            $table->string('current_director_name')->nullable();
            $table->string('support_person_name')->nullable();
            $table->string('support_person_no')->nullable();
            $table->string('website')->nullable();
            $table->string('image')->nullable();
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
        Schema::dropIfExists('organization_set_ups');
    }
};
