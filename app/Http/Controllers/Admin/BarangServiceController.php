<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBarangServiceRequest;
use App\Http\Requests\UpdateBarangServiceRequest;
use App\Models\BarangService;
use App\Models\Customer;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Response;

class BarangServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(BarangService $barangService): Response
    {
        // WADUH INI MAH 
        $barangServices = BarangService::with('customer')->paginate(10);

        return inertia('Admin/BarangService/IndexBarangService', compact('barangServices'));
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
        if (!$request->post('customer_id')) {
            abort(403);
        }

        $userIdWhoUploadCustomer = Customer::where('id', $request->post('customer_id'))->first('user_id');
        
        // Mastiin hanya yang upload customer di awal yang boleh tambahin lagi
        abort_if($userIdWhoUploadCustomer->user_id != auth()->user()->id, 403);


        $MergeRequestWithId = array_merge(
            $request->validated(),
            ['user_id' => auth()->user()->id]
        );

        $data = BarangService::create($MergeRequestWithId);

        if ($request->file('gambar_barang')) {
            $gambar_barang = Storage::disk('public')->put('gambar_barang', $request->file('gambar_barang'));
            $data->update(['gambar_barang' => $gambar_barang]);
        }

        return redirect(route('customer.show', $request->post('customer_id')));
    }

    /**
     * Display the specified resource.
     */
    public function show(BarangService $barangservice)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(BarangService $barangservice)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBarangServiceRequest $request, BarangService $barangservice)
    {
        $this->authorize('view', $barangservice);
        $barangservice->update($request->except('gambar_barang'));
        if ($request->file('gambar_barang')) {
            Storage::disk('public')->delete($barangservice['gambar_barang']);
            $gambar = Storage::disk('public')->put('gambar_barang', $request->file('gambar_barang'));
            $barangservice->update(['gambar_barang' => $gambar]);
        };

        return redirect()->route('barangservice.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(BarangService $barangservice)
    {
        $this->authorize('view', $barangservice);
        Storage::disk('public')->delete($barangservice->gambar_barang);
        $barangservice->delete();
    }
}
