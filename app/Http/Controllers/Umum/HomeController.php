<?php

namespace App\Http\Controllers\Umum;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    function index(): Response
    {
        $data = [
            'nama' => 'Qushai',
            'kelas' => '15210110',
        ];
        return Inertia::render('Umum/Home/Home',$data);
    }
}
