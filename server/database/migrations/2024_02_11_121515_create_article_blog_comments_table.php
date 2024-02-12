<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('article_blog_comments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('article_blog_id')->nullable();
            $table->unsignedBigInteger('comment_person_id')->nullable();
            $table->text('comments')->nullable();

            $table->timestamps();

            // Define foreign key relationships
            $table->foreign('article_blog_id')->references('id')->on('article_blogs')->onDelete('cascade');
            $table->foreign('comment_person_id')->references('id')->on('users')->onDelete('cascade');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('article_blog_comments');
    }
};
