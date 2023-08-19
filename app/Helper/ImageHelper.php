<?php

namespace App\Helper;

use Illuminate\Support\Facades\Storage;

class ImageHelper
{

    public static function ImagePut($path,$data, $disk = 'public')
    {
        return Storage::disk($disk)->put($path, $data);
    }

    public static function ImageDelete($data, $disk = 'public')
    {
        Storage::disk($disk)->delete($data);
    }
}
