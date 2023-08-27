<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\AsArrayObject;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JenisService extends Model
{
    use HasFactory;
    public $timestamps = false;

    protected $fillable = [
        'judul',
        'sub_judul',
        'background_foto',
        'blog',
        'icon',
        'kategori',
    ];
    
    // suka error kalo update mending mutator daripada cast 
    // protected $casts = [
    //     'kategori' => AsArrayObject::class,
    // ];

    // astagfirullah

    protected function kategori(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => json_decode($value, true),
        );
    }
}
