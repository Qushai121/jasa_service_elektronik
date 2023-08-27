<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\Pivot;

class BarangService extends Pivot
{
    use HasFactory;

    public $table = 'barang_services';
    public $timestamps = true;

    protected $fillable = [
        'nama_barang',
        'gambar_barang',
        'keluhan_barang',
        'customer_id',
        'user_id',

        'created_at',
        'updated_at',
    ];


    public function userbarangservices()
    {
        return $this->hasMany(UserBarangService::class);
    }

    public function customers(): BelongsTo
    {
        return $this->belongsTo(Customer::class, 'customer_id');
    }

    public function customersBelongToMany(): BelongsToMany
    {
        // Isian parameternya itu 
        // 1. masukin sibling table yang di gabungin sama kita di many to many table
        // 2. masukin nama table many to many nya
        // 3. masukin table pivot user yang tersimpan di many to many table, kalo lu bikin ini methodnya nya di barangservice Model
        // berarti masukin barang_service_id dan ganti parameter ke 1 jadi User::class [model]
        // 4. masukin pivot sibling table 
        return $this->belongsToMany(User::class, 'user_barang_services', 'barang_service_id', 'user_id')->withPivot('status', 'id', 'askhelp','pekerja_utama');
    }
    public function UserBarangBelongToMany(): BelongsToMany
    {
        // Isian parameternya itu 
        // 1. masukin sibling table yang di gabungin sama kita di many to many table
        // 2. masukin nama table many to many nya
        // 3. masukin table pivot user yang tersimpan di many to many table, kalo lu bikin ini methodnya nya di barangservice Model
        // berarti masukin barang_service_id dan ganti parameter ke 1 jadi User::class [model]
        // 4. masukin pivot sibling table 
        return $this->belongsToMany(UserBarangService::class, 'user', 'barang_service_id', 'user_id')->withPivot('status', 'id', 'askhelp','pekerja_utama');
    }

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'user_barang_services')->withPivot('status');
    }

    public function usersBelongTo(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
