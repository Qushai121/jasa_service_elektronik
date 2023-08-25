<?php

namespace App\Http\Controllers\Admin;

use App\Helper\ImageHelper;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBarangServiceRequest;
use App\Http\Requests\UpdateBarangServiceRequest;
use App\Models\BarangService;
use App\Models\Customer;
use App\Models\UserBarangService;
use Illuminate\Http\Request;
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
        $barangServices = BarangService::with([
            'customersBelongToMany' => function ($q) {
                $q->where('pekerja_utama' ,1);
            }, 'customers'
        ])->paginate(10);


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

        // Mastiin hanya yang upload customer di awal yang boleh tambahin 
        abort_if($userIdWhoUploadCustomer->user_id != auth()->user()->id, 403);


        $MergeRequestWithId = array_merge(
            $request->validated(),
            ['user_id' => auth()->user()->id]
        );

        // insertGetId ini kita bakal dapet return id yang baru diinput
        $data = BarangService::insertGetId($MergeRequestWithId);
        if ($request->file('gambar_barang')) {
            $gambar_barang = ImageHelper::ImagePut('gambar_barang', $request->file('gambar_barang'));
            BarangService::find($data)->update(['gambar_barang' => $gambar_barang]);
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
            ImageHelper::ImageDelete($barangservice['gambar_barang']);
            $gambar = ImageHelper::ImagePut('gambar_barang', $request->file('gambar_barang'));
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
        ImageHelper::ImageDelete($barangservice->gambar_barang);
        // dd($barangservice);
        $barangservice->delete();
        return redirect()->route('customer.show',$barangservice->customer_id);
    }
}
