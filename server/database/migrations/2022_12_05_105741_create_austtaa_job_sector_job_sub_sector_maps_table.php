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
        Schema::create('austtaa_job_sector_job_sub_sector_maps', function (Blueprint $table) {
            $table->id();
            $table->string('job_sector_id')->nullable();
            $table->string('job_sub_sector_id')->nullable();
            $table->string('created_by')->nullable();
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
        Schema::dropIfExists('austtaa_job_sector_job_sub_sector_maps');
    }
};
