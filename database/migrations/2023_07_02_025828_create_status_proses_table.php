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
        Schema::create('status_proses', function (Blueprint $table) {
            $table->id();
            $table->string('status');
            $table->unsignedBigInteger('pekerja_id');
            $table->foreign('pekerja_id')->references('id')->on('users');
            $table->unsignedBigInteger('barang_services_id');
            $table->foreign('barang_services_id')->references('id')->on('barang_services')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('status_proses');
    }
};
