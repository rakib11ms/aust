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
        Schema::create('aussta_events', function (Blueprint $table) {
            $table->id();
               $table->string('event_unique_id')->nullable();
               $table->string('event_type_id')->nullable();
                 $table->string('event_title')->nullable();
                 $table->string('posted_by')->nullable();
                 $table->string('updated_by')->nullable();
                 $table->longText('event_description')->nullable();
                 $table->string('contact_person')->nullable();
                 $table->string('event_time')->nullable();
                 $table->string('event_date')->nullable();
                 $table->string('event_fee')->nullable();
                 $table->string('priority')->nullable();
                 $table->string('notification_type')->nullable();
                 $table->boolean('payment_type')->default(0);
                 $table->boolean('showMobile')->default(1);
                 $table->boolean('showDesktop')->default(1);
                 $table->boolean('isArchived')->default(0);
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
        Schema::dropIfExists('aussta_events');
    }
};
