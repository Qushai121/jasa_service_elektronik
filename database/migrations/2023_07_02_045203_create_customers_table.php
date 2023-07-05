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
            $table->bigInteger('data_entry_id')->unsigned();
            $table->foreign('data_entry_id')->references('id')->on('users')->onDelete('cascade');
        });
        
        Schema::table('barang_services',function (Blueprint $table) {
            $table->bigInteger('customer_id')->unsigned()->nullable();
            $table->foreign('customer_id')->references('id')->on('customers')->onDelete('cascade');
            
            $table->bigInteger('data_entry_id')->unsigned();
            $table->foreign('data_entry_id')->references('id')->on('users')->onDelete('cascade');
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
