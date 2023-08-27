<?php

namespace App\Http\Controllers\Umum;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PesanServiceController extends Controller
{
    function index(): Response
    {
        return Inertia::render('Umum/PesanService/PesanService');
    }
}
