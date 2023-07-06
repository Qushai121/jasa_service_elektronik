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
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string('nama');
            $table->string('nomor_kontak');
            $table->string('email');
            // ini sambungan biar satu akun role data_entry punya tanggung jawab dengan data yang dia masuki
            // dan juga pastinya berfungsi sebagai pemisah tanggung jawab setiap data yang di masukan
            // mungkin nanti ada fitur oper operan penanggung jawab data_entry 🙏
            $table->foreignId('user_id')->constarined();
        });

        Schema::table('barang_services', function (Blueprint $table) {
            $table->foreignId('user_id')->constrained();
            $table->foreignId('customer_id')->constrained();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customers');
    }
};
