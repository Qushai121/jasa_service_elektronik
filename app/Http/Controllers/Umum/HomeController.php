<?php

namespace App\Http\Controllers\Umum;

use App\Http\Controllers\Controller;
use App\Models\JenisService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    function index(): Response
    {
        $JenisServices = JenisService::take(4)->get(['id','judul','sub_judul','icon','background_foto']);
        return Inertia::render('Umum/Home/Home',compact('JenisServices'));
    }
}
