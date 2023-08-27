<?php

namespace App\Http\Controllers\Admin;

use App\Enums\BarangStatusEnum;
use App\Http\Controllers\Controller;
use App\Models\UserBarangService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class DashboardController extends Controller{
    
    public function index() 
    {
        return Inertia::render('Dashboard');
    }
}