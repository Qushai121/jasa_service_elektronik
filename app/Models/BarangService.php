<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class BarangService extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'nama_barang',
        'gambar_barang',
        'keluhan_barang',
        'customer_id',
        'data_entry_id'
    ];

    public function customer() :BelongsTo
    {
        return $this->belongsTo(Customer::class);
    }
}
