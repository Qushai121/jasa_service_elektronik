<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;


class CobaController extends Controller
{

    public function coba()
    {
        $datas = [
            'subject' => 'Bantuan',
            'nama' => 'John Marsudi',
            'nomortelp' => '08123456789', 
            'pesan' => 'loremasdasdasdasd s asd asdsad asd asd asdas asd asdasd asd asd sadas dsadasd asdasd ',
        ];

        return view('emails.BantuanEmail',compact('datas'));
    }
}