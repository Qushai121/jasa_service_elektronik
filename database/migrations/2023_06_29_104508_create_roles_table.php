<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('roles', function (Blueprint $table) {
            $table->id('roles_id');
            $table->string('role_name');
            // $table->timestamps();
        });

        Schema::table('users',function (Blueprint $table) {
            $table->unsignedBigInteger('roles_id')->default(1);
            $table->foreign('roles_id')->references('roles_id')->on('roles')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('roles');
    }
};
