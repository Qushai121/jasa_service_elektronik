<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBarangServiceRequest;
use App\Http\Requests\UpdateBarangServiceRequest;
use App\Models\BarangService;
use Illuminate\Support\Facades\Storage;
use Inertia\Response;

class BarangServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index() : Response
    {
        // WADUH INI MAH 
        $barangServices = BarangService::paginate(3);
        // dd($barangServices);
        return inertia('Admin/BarangService/IndexBarangService',compact('barangServices'));
    }

    /**
     * Show the form for creating a new resource.
     */
    // public function create()
    // {
    //     //
    // }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBarangServiceRequest $request)
    {
        $data = BarangService::create($request->validated());

        if ($request->file('gambar_barang')) {
            $gambar_barang = Storage::disk('public')->put('gambar_barang', $request->file('gambar_barang'));
            $data->update(['gambar_barang' => $gambar_barang]);
        }

        return redirect(route('barangservice.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(BarangService $barangService)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(BarangService $barangService)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBarangServiceRequest $request, BarangService $barangService)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(BarangService $barangService)
    {
        //
    }
}
