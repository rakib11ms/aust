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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
   
            $table->string('full_name')->nullable();
            $table->string('nick_name')->nullable();
            $table->string('email')->unique();
            $table->string('phone_no')->unique()->nullable();
            $table->string('batch')->nullable();
            $table->string('blood_group')->nullable();
            $table->string('stream')->nullable();
            $table->string('user_role')->nullable();
            $table->string('job_sector')->nullable();
            $table->string('job_sub_sector')->nullable();
            $table->string('office_email')->nullable();
            $table->string('office_address')->nullable();
            $table->string('name_of_company')->nullable();
            $table->string('present_address')->nullable();
            $table->string('permanent_address')->nullable();
            $table->string('image')->nullable();
            $table->timestamp('email_verified_at')->nullable();       
            $table->string('otp_verify')->nullable();
            $table->string('device_token')->nullable();

            $table->string('password')->nullable();
            $table->string('confirm_password')->nullable();
            $table->rememberToken();

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
        Schema::dropIfExists('users');
    }
};
