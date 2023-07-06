<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class BarangService extends Model
{
    use HasFactory;

    public $table = 'barang_services';
    public $timestamps = false;

    protected $fillable = [
        'nama_barang',
        'gambar_barang',
        'keluhan_barang',
        'customer_id',
        'user_id'
    ];

    public function customer(): BelongsTo
    {
        return $this->belongsTo(Customer::class);
    }

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class,'user_barang_services');
    }
}
