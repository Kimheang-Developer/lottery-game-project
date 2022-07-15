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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('referral')->nullable();
            $table->string('name');
            $table->string('username');
            $table->string('password');
            $table->string('phone_number');
            $table->string('profile_photo_path', 2048)->default('default.png');
            $table->enum('status', ['1', '0'])->default('1');
            $table->string('api_token', 80)->unique()->nullable()->default(null);
            $table->tinyInteger('is_admin')->default(0);
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
};
