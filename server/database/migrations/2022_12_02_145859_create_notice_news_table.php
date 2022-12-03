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
        Schema::create('notice_news', function (Blueprint $table) {
            $table->id();
             $table->string('category_id')->nullable();
            $table->string('subcategory_id')->nullable();
            $table->string('notice_news_title')->nullable();
            $table->string('posted_by')->nullable();
            $table->string('updated_by')->nullable();
            $table->longText('notice_news_description')->nullable();
            $table->string('notice_news_image')->nullable();
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
        Schema::dropIfExists('notice_news');
    }
};
