<?php

namespace App\Http\Controllers\Admin;

use App\Enums\BarangStatusEnum;
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
    }

    /**
     * METHOD INI MENGURUS AMBIL JOB 
     */
    public function store(StoreUserBarangServiceRequest $request)
    {
        $userBarangService =  UserBarangService::where('barang_service_id', $request->post('barang_service_id'))->first();
        $MergeRequestWithId = array_merge(
            $request->post(),
            !$userBarangService ? ['status' => BarangStatusEnum::DIPROSES->value] : ['status' =>BarangStatusEnum::HELPER->value ],
            ['askhelp' => 0 ]
        );
        userBarangService::create($MergeRequestWithId);
        return redirect()->to(route('barangservice.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show($userbarangservice)
    {
        $userBarangServices = BarangService::where('id', $userbarangservice)->with(['customersBelongToMany' => function ($q) {
            $q->with('role');
        }, 'customers'])->first();
        // dd($userBarangServices);

        // ADA KESALAHAN DALAM QUERY AMBIL DATA 
        // $userBarangServices = UserBarangService::where('id', $userbarangservice)->with([
        //     'users' =>  function ($q) {
        //         $q->with('role');
        //     },
        //     'barangservices' =>  function ($q) {
        //         $q->with('customers');
        //     }
        // ])->first();
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

    public function askhelp(UserBarangService $userBarangService)
    {
        dd($userBarangService);
    }
}
