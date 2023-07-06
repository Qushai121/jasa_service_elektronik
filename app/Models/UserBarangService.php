<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Pivot;

class UserBarangService extends Model
{
    use HasFactory;
    protected $table = "user_barang_services";

    public function throughCustomer()
    {
        // return $this->hasManyThrough(
        //     Customer::class,
        //     BarangService::class,
        //     'user_id','id'
        // );
    
    //     return $this->hasMany(
    //         BarangService::class,
    //         "id",
    //         'barang_service_id'
    //     );
    }
}
