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
        Schema::create('article_blogs', function (Blueprint $table) {
            $table->id();
            $table->string('category_id')->nullable();
            $table->string('subcategory_id')->nullable();
            $table->string('article_blog_title')->nullable();
            $table->string('posted_by')->nullable();
            $table->string('updated_by')->nullable();
            $table->longText('article_blog_description')->nullable();
            $table->string('article_blog_image')->nullable();
            $table->boolean('isDraft')->default(0);
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
        Schema::dropIfExists('article_blogs');
    }
};
