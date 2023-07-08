<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\UserBarangService;
use App\Http\Requests\StoreUserBarangServiceRequest;
use App\Http\Requests\UpdateUserBarangServiceRequest;
use App\Models\BarangService;
use App\Models\Customer;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Response;

class UserBarangServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        // BANYAK JALAN MENUJU QUERY 
        // Mamah aku takut
        $userBarangService = auth()->user()->barangservices()->paginate(10);

        // with berguna untuk manggil method yang udah di buat di [Model]
        // Kalo g mau merah pake yang dibawah 👇 
        // tapi yang bawah kaga bisa make paginate harus di apus dulu compoenet < PaginateAdmin />
        // dan ubah sedikit cara ambil datanya
        // $userBarangService = User::where('id', auth()->user()->id)->with('barangservices')->first();

        return inertia('Admin/UserBarangService/IndexuserBarangService', compact("userBarangService"));
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
    public function show($userbarangservice)
    {
        $userBarangServices = UserBarangService::where('id', $userbarangservice)->with(['users', 'barangservices' =>  function ($q) {
            // Mantap Bang Gpt 💡
            $q->with('customers');
        }])->first();
        // $userBarangServices = UserBarangService::where('id',$userbarangservice)->with(['users','barangservices'])->get();

        return inertia('Admin/UserBarangService/DetailUserBarangService', compact("userBarangServices"));
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
    public function update(UpdateUserBarangServiceRequest $request, UserBarangService $userbarangservice)
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
