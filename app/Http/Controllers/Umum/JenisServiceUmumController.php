<?php

namespace App\Http\Controllers\Umum;

use App\Http\Controllers\Controller;
use App\Models\JenisService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class JenisServiceUmumController extends Controller
{
    public function index(Request $request)
    {
        $JenisServices = JenisService::select('kategori')->get();
        $jumlahData = $JenisServices->count();
        $data = [];
        foreach ($JenisServices as $key => $value) {
            if ($value->kategori) {
                array_push($data, array_unique($value->kategori));
            }
        };
        $combinedArray = [];

        foreach ($data as $subArray) {
            $combinedArray = array_merge($combinedArray, $subArray);
        }
        // dd($combinedArray);
        $kategori = array_count_values($combinedArray);
        // $kategori = [];
        // foreach ($combinedArray as $name => $value) {
        //     $kategori[] = [
        //         "name" => $value,
        //         "value" => $combinedArray
        //     ];
        // }


        $dataFromReq = $request->only('search');
        $JenisServices = [];
        if (!$dataFromReq) {
            $JenisServices = JenisService::paginate();
        } else {
            $search = $dataFromReq['search'];
            $JenisServices = JenisService::where(function ($query) use ($search) {
                $query->where('judul', 'like', "%$search%")
                ->orWhere('kategori', 'like', "%$search%");
            })->paginate();
        }

        return Inertia::render('Umum/JenisService/JenisService', compact('JenisServices', 'kategori','jumlahData'));
    }

    public function show(JenisService $JenisService)
    {
        $otherJenisServices = JenisService::take(5)->whereNotIn('id', [$JenisService->id])->get();
        return Inertia::render('Umum/JenisService/Pages/DetailJenisService', compact('JenisService', 'otherJenisServices'));
    }
}
