<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\CustomerMail;
use App\Models\BarangService;
use App\Models\Customer;

class CustomerEmailInfoController extends Controller
{
    public function index(BarangService $barangService)
    {
        $datas = $barangService->where('id', $barangService->id)->with('customers')->first();
        // return view('emails.CustomerInfoMail',compact('datas'));
        // dd($datas->customers->email);
        if ($datas) {
            Mail::to($datas->customers->email)->send(new CustomerMail($datas));
            return redirect()->route('customer.show', $datas->customers->id);
        };
    }
}
