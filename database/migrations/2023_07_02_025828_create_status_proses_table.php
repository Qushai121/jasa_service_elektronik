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
            $table->unsignedBigInteger('status_proses_id')->primary();
            $table->unsignedBigInteger('proses_pekerja');
            $table->foreign('proses_pekerja')->references('id')->on('users');
            $table->unsignedBigInteger('barang_services_id');
            $table->foreign('barang_services_id')->references('barang_services_id')->on('barang_services');
            $table->timestamps();
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
