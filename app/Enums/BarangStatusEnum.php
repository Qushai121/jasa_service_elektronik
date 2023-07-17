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
<!-- 
{/* <p className="badge badge-error whitespace-nowrap" >Tidak Bisa Diperbaiki</p> */}
 {/* <p className="badge badge-error whitespace-nowrap">
 Belum Di Proses </p> */}
 
 {/* <p className="badge badge-warning whitespace-nowrap">
     Perlu Bantuan
 </p> */}
 {/* <p className="badge badge-success whitespace-nowrap" >Selesai</p> */} -->