<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BarangService extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama_barang',
        'gambar_barang',
        'keluhan_barang',
        'customer_id',
    ];
}
