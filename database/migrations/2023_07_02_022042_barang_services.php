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
        Schema::create('barang_services',function (Blueprint $table) {
            $table->unsignedBigInteger('barang_services_id')->primary();
            $table->string('nama_barang');
            $table->text('gambar_barang');
            $table->text('keluhan_barang');
            $table->unsignedBigInteger('status_proses');
            $table->foreign('status_proses')->references('customers_id')->on('customers');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('barang_services');
    }
};
