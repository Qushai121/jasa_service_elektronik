<?php

namespace App\Models;

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
    ];
}
