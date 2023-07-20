<?php

namespace App\Http\Controllers\Admin;

use App\Enums\BarangStatusEnum;
use App\Http\Controllers\Controller;
use App\Models\UserBarangService;
use App\Http\Requests\StoreUserBarangServiceRequest;
use App\Http\Requests\UpdateUserBarangServiceRequest;
use App\Models\BarangService;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Response;

class UserBarangServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        // $userBarangService = UserBarangService::where('user_id',auth()->user()->id)->paginate(10);
        $userBarangService = User::where('id', auth()->user()->id)->with('barangservices')->paginate(10);
        // $userBarangService = auth()->user()->barangservices()->paginate(10);
        // dd($userBarangService);

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
        // ini untuk mengamankan kalo saja buttonnya di formnya dimanipulasi...
        // 👇
        $userBarangService =  UserBarangService::where('barang_service_id', $request->post('barang_service_id'))->first();
        // disini benar benar mencari apakah barang ini udah ada pekerja utamanya agar tidak tersingkir 

        $MergeRequestWithId = array_merge(
            $request->post(),
            !$userBarangService ? ['status' => BarangStatusEnum::DIPROSES->value] : ['status' => BarangStatusEnum::HELPER->value],
            !$userBarangService ? ['pekerja_utama' => 1] : ['pekerja_utama' => 0],
        );
        userBarangService::create($MergeRequestWithId);
        return redirect()->to(route('barangservice.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show($userbarangservice)
    {
        $userBarangServices = BarangService::where('id', $userbarangservice)->orderBy('updated_at', 'ASC')->with(['customersBelongToMany' => function ($q) {
            $q->with('role');
        }, 'customers'])->first();

        // Mencari Apakah ini pekerja utamanya
        // terpaks ubah karena nambah fitur lempar pekerja utama ke helper
        $pekerjaUtama = [];
        $helper = [];
        for ($i = 0; $i < count($userBarangServices->customersBelongToMany); $i++) {
            $pekerjaUtamas = $userBarangServices->customersBelongToMany[$i];
            if ($pekerjaUtamas->pivot->pekerja_utama) {
                $pekerjaUtama = $pekerjaUtamas;
            } else {
                $helper[] = $pekerjaUtamas;
            }
        }

        return inertia('Admin/UserBarangService/DetailUserBarangService', compact("userBarangServices", "pekerjaUtama", "helper"));
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
     * Tinggalkan pekerjaan lalu oper pangkat ke 
     */
    public function destroy(UserBarangService $userBarangService)
    {
        //
    }


}
