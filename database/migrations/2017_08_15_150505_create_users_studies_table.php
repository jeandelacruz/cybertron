<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersStudiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users_studies', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('user_id');
            $table->enum('type_institute',['tecnico','universitario']);
            $table->enum('situation_academy',['cursando','egresado','titulado','bachiller']);
            $table->string('name_institute',255);
            $table->string('name_career',255);
            $table->date('date_begin');
            $table->date('date_finish');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users_studies');
    }
}
