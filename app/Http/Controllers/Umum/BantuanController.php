<?php

namespace App\Http\Controllers\Umum;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;


class BantuanController extends Controller
{
    public function index() 
    {
        return Inertia::render('Umum/Bantuan/Bantuan');
    }
}
