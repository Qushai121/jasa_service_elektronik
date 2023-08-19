<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\CustomerMail;
use App\Models\BarangService;
use App\Models\Customer;

class EmailController extends Controller
{
    static function index(int $id)
    {
       $barangService =  BarangService::find($id)->with('customers')->first();
    
        if ($barangService) {
            Mail::to($barangService->customers->email)->send(new CustomerMail($barangService));
            return true;
        }else{
            return false;
        };
    }

  
}
