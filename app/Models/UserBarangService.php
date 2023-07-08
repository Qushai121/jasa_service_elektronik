<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\Pivot;

class UserBarangService extends Model
{
    use HasFactory;
    protected $table = "user_barang_services";


    public function users(): HasMany
    {
        return $this->hasMany(User::class,'id','user_id');
    }
    public function barangservices(): HasMany
    {
        return $this->hasMany(BarangService::class,'id','barang_service_id');
    }



    
}
