<?php

use App\Enums\BarangStatusEnum;
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
        Schema::create('user_barang_services', function (Blueprint $table) {
            $table->id();
            $table->string('status')->default(BarangStatusEnum::BELUMDIPROSES->value);
            $table->foreignId('user_id')->constrained();
            $table->foreignId('barang_service_id')->constrained()->cascadeOnDelete();
            $table->boolean('askhelp')->default(0);
            $table->boolean('pekerja_utama')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_barang_services');
    }
};
