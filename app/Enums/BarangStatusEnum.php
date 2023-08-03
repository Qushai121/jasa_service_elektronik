<?php 

namespace App\Enums;

// enumnya dari sini aja lebih bagus cenah
enum BarangStatusEnum : string
{
    case BELUMDIPROSES = 'Belum DiProses';
    case DIPROSES = 'DI Proses';
 // ============================
    case BANTUAN = 'Perlu Bantuan';
    case GAGAL = 'Gagal Diperbaiki';
    case SELESAI = 'Selesai';
    case HELPER = 'Helper';
}

?>