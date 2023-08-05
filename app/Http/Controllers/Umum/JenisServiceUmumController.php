<?php

namespace App\Http\Controllers\Umum;

use App\Http\Controllers\Controller;
use App\Models\JenisService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class JenisServiceUmumController extends Controller
{
    public function index()
    {
        $JenisServices = JenisService::paginate();
        return Inertia::render('Umum/JenisService/JenisService',compact('JenisServices'));
    }

    public function show(JenisService $JenisService)
    {
        $otherJenisServices = JenisService::take(5)->whereNotIn('id', [$JenisService->id])->get();
        return Inertia::render('Umum/JenisService/Pages/DetailJenisService',compact('JenisService','otherJenisServices'));
    }
}
