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
        Schema::create('advertisements', function (Blueprint $table) {
            $table->id();
                 $table->string('advertisement_title')->nullable();
                 $table->string('posted_by')->nullable();
                 $table->string('updated_by')->nullable();
                 $table->longText('advertisement_description')->nullable();
                 $table->string('home_page')->nullable()->comment('1=true,0=false');
                 $table->string('view_job_page')->nullable()->comment('1=true,0=false');
                 $table->string('view_advment_page')->nullable()->comment('1=true,0=false');
                 $table->string('create_advment_page')->nullable()->comment('1=true,0=false');
                 $table->string('add_general_post_page')->nullable()->comment('1=true,0=false');
                 $table->string('add_event_page')->nullable()->comment('1=true,0=false');
                 $table->string('image')->nullable();
                 $table->string('show_time')->nullable();
                 $table->string('show_days')->nullable();
                 $table->string('last_show_days')->nullable();
                 $table->string('redirect_link')->nullable();
                 $table->string('position')->nullable();
                 $table->boolean('showMobile')->default(1);
                 $table->boolean('showDesktop')->default(1);
                 $table->boolean('isArchived')->default(0);
                 $table->boolean('isPublished')->default(1);
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
        Schema::dropIfExists('advertisements');
    }
};
