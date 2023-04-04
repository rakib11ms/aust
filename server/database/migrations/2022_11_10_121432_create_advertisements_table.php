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
                 $table->string('news_page')->nullable()->comment('1=true,0=false');
                 $table->string('event_page')->nullable()->comment('1=true,0=false');
                 $table->string('blog_page')->nullable()->comment('1=true,0=false');
                 $table->string('post_page')->nullable()->comment('1=true,0=false');
                 $table->string('job_page')->nullable()->comment('1=true,0=false');
   
                 $table->string('show_time')->nullable();
                 $table->string('show_days')->nullable();
                 $table->string('last_show_days')->nullable();
                 $table->string('redirect_link')->nullable();
                 $table->string('position')->nullable();
                 $table->string('advertisement_fee')->nullable();
                 $table->string('advertiser_name')->nullable();
                 $table->string('advertiser_email')->nullable();
                 $table->string('advertiser_phone')->nullable();
                 $table->string('reference_no')->nullable();
                 $table->string('po_no')->nullable();
                 $table->string('advertisement_file')->nullable();
                 $table->boolean('showMobile')->default(1);
                 $table->boolean('showDesktop')->default(1);
                 // $table->boolean('isArchived')->default(0);
                $table->boolean('payment_type')->default(0);

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
