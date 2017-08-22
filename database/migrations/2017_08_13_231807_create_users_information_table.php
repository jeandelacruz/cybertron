<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersInformationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users_information', function (Blueprint $table) {
            $table->increments('id')->unsigned();
            $table->unsignedInteger('user_id');
            $table->string('phone_home',8)->nullable();
            $table->string('phone_mobile',9)->nullable();
            $table->string('ubigeo_id',6)->nullable();
            $table->string('address')->nullable();
            $table->date('datebirthday')->nullable();
            $table->enum('identity',['dni','extranjeria'])->nullable();
            $table->unsignedBigInteger('identity_number')->nullable();
            $table->enum('license',['-','A-I','A-IIb','AIIIa','AIIIb','AIIIc'])->nullable();
            $table->unsignedBigInteger('license_number')->nullable();
            $table->enum('marital_status',['soltero','casado','conviviente','divorciado','viudo'])->nullable();
            $table->unsignedBigInteger('children_number')->nullable();
            $table->foreign('user_id')
                ->references('id')
                ->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users_information');
    }
}
