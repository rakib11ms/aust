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
        Schema::create('job_posts', function (Blueprint $table) {
            $table->id();
                 $table->string('job_type')->nullable();
                 $table->string('job_title')->nullable();
                 $table->longText('job_description')->nullable();
                 $table->longText('job_link')->nullable();
                 $table->longText('image')->nullable();
                 $table->string('posted_by')->nullable();
                 $table->string('date')->nullable();
                 $table->Boolean('isPublished')->nullable();
                 $table->Boolean('isArchived')->nullable();
                 $table->string('application_deadline')->nullable();
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
        Schema::dropIfExists('job_posts');
    }
};
