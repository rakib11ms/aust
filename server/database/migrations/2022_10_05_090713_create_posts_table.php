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
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
                 $table->string('post_title')->nullable();
                 $table->string('post_type')->nullable();
                 $table->longText('post_description')->nullable();
                 $table->longText('image')->nullable();
                 $table->string('posted_by')->nullable();
                 $table->string('date')->nullable();
                 $table->Boolean('isPublished')->nullable();
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
        Schema::dropIfExists('posts');
    }
};
