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
        Schema::create('global_notifications', function (Blueprint $table) {
            $table->id();
              $table->string('notification_title')->nullable();
            $table->string('notification_body')->nullable();    
            $table->string('priority')->nullable();    
            $table->string('for_all_users')->nullable();
            $table->string('for_admin')->nullable();
            $table->string('for_alumni')->nullable();
            $table->string('for_staff')->nullable();
            $table->string('for_moderator')->nullable();
            $table->string('notification_both')->nullable();
            $table->string('mail_notification')->nullable();
            $table->string('push_notification')->nullable();
            $table->string('posted_by')->nullable();
            $table->string('updated_by')->nullable();
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
        Schema::dropIfExists('global_notifications');
    }
};
