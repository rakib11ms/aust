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
        Schema::create('notifications', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('type')->nullable();
            $table->morphs('notifiable');
            $table->text('data')->nullable();
            $table->string('title')->nullable();
            $table->longText('body')->nullable();
            $table->string('notify_user')->nullable();
            $table->string('notify_type')->nullable();
            $table->string('date')->nullable();
            $table->string('time')->nullable();
            $table->string('priority')->nullable();
            $table->string('show_days')->nullable();
            $table->timestamp('read_at')->nullable();
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
        Schema::dropIfExists('notifications');
    }
};
