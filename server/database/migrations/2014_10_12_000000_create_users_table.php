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
            $table->longText('bio')->nullable();
            $table->string('phone_no')->unique()->nullable();
            $table->string('batch')->nullable();
            $table->string('blood_group')->nullable();
            $table->string('stream')->nullable();
            $table->string('user_role')->nullable();
            $table->string('job_sector')->nullable();
            $table->string('job_sub_sector')->nullable();
            $table->string('office_email')->nullable();
            $table->string('user_professional_info_id')->nullable();
            $table->string('user_educational_info_id')->nullable();
            $table->string('present_address')->nullable();
            $table->string('permanent_address')->nullable();
            $table->string('thana')->nullable();
            $table->string('status')->nullable();
            $table->string('image')->nullable();
            $table->timestamp('email_verified_at')->nullable();       
            $table->string('otp_verify')->nullable();
            $table->string('device_token')->nullable();
            $table->string('password')->nullable();
            $table->string('confirm_password')->nullable();
            $table->string('cv_file')->nullable();
            $table->string('facebook_link')->nullable();
            $table->string('twitter_link')->nullable();
            $table->string('linkedin_link')->nullable();
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
