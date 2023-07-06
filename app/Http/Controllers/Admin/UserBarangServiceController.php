<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\UserBarangService;
use App\Http\Requests\StoreUserBarangServiceRequest;
use App\Http\Requests\UpdateUserBarangServiceRequest;
use App\Models\BarangService;
use App\Models\User;
use Inertia\Response;

class UserBarangServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        // dd(BarangService::with('users')->get());
        // $userBarangService = BarangService::with('users')->get();
        $userBarangService = User::where('id',auth()->user()->id)->with('barangservices')->first();
        // $userBarangService = UserBarangService::with('throughCustomer')->get();
      
        return inertia('Admin/UserBarangService/IndexuserBarangService',compact("userBarangService"));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserBarangServiceRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(UserBarangService $userBarangService)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(UserBarangService $userBarangService)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserBarangServiceRequest $request, UserBarangService $userBarangService)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserBarangService $userBarangService)
    {
        //
    }
}
