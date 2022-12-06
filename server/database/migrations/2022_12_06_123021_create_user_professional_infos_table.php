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
        Schema::create('user_professional_infos', function (Blueprint $table) {
            $table->id();
            $table->string('user_id')->nullable();
            $table->string('office_email')->nullable();
            $table->string('office_address')->nullable();
            $table->string('name_of_company')->nullable();
            $table->string('year')->nullable();
            $table->string('designation')->nullable();
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
        Schema::dropIfExists('user_professional_infos');
    }
};
