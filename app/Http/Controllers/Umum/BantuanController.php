<?php

namespace App\Http\Controllers\Umum;

use App\Http\Controllers\Controller;
use App\Mail\BantuanMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Inertia\Response;


class BantuanController extends Controller
{
    public function index()
    {
        return Inertia::render('Umum/Bantuan/Bantuan');
    }

    public function store(Request $request)
    {

        $request->validate([
            'nama' => 'required',
            'nomortelp' => 'required',
            'pesan' => 'required',
        ]);


        $datas = [
            'subject' => null,
            'nama' => $request->nama,
            'nomortelp' => $request->nomortelp,
            'pesan' => $request->pesan,
        ];

        try {
            Mail::to(env('EMAIL_BAGIAN_BANTUAN'))->send(new BantuanMail($datas));
            return redirect()->back()->with('success', 'Pesan anda telah terkirim');
        } catch (\Throwable $th) {
            return redirect()->back()->with('error', 'Pesan anda gagal terkirim');
        }
    }
}
