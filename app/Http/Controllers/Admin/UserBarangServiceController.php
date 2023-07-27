<?php

namespace App\Http\Controllers\Admin;

use App\Enums\BarangStatusEnum;
use App\Http\Controllers\Controller;
use App\Http\Controllers\CustomerEmailInfoController;
use App\Models\UserBarangService;
use App\Http\Requests\StoreUserBarangServiceRequest;
use App\Http\Requests\UpdateUserBarangServiceRequest;
use App\Models\BarangService;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class UserBarangServiceController extends Controller
{
    /**
     * Menampilkan Semua Pekerja Yang Saya Ambil Kemungkinan nanti ada filter 
     * di mana pekerjan saya, yang jadi helper / pekerja utama
     */
    public function index(): Response
    {
        $userBarangService = User::where('id', auth()->user()->id)->with('barangservices')->paginate(10);


        return inertia('Admin/UserBarangService/IndexuserBarangService', compact("userBarangService"));
    }

    // /**
    //  * Show the form for creating a new resource.
    //  */
    // public function create()
    // {
    // }

    /**
     * METHOD INI MENGURUS AMBIL JOB 
     */
    public function store(StoreUserBarangServiceRequest $request)
    {
        // ini untuk mengamankan kalo saja buttonnya di formnya dimanipulasi...
        // 👇
        $userBarangService =  UserBarangService::where('barang_service_id', $request->post('barang_service_id'))->first();
        // disini benar benar mencari apakah barang ini udah ada pekerja utamanya agar tidak tersingkir 
        if ($userBarangService) {
            return back()->with(['message' => 'Pekerja lain sudah mengambil ini']);
            abort('sdsdsd');
        }

        $MergeRequestWithId = array_merge(
            $request->post(),
            !$userBarangService ? ['status' => BarangStatusEnum::DIPROSES->value] : ['status' => BarangStatusEnum::HELPER->value],
            !$userBarangService ? ['pekerja_utama' => 1] : ['pekerja_utama' => 0],
        );
        userBarangService::create($MergeRequestWithId);
        return redirect()->to(route('barangservice.index'));
    }


    public function show($userbarangservice)
    {
        if ($userbarangservice) {

            try {
                $userBarangServices = BarangService::where('id', $userbarangservice)->orderBy('updated_at', 'ASC')->with(['customersBelongToMany' => function ($q) {
                    $q->with('role');
                }, 'customers'])->first();
                // Mencari Apakah ini pekerja utamanya
                $pekerjaUtama = [];
                $helper = [];
                if ($userBarangServices != null) {
                    $length = count($userBarangServices->customersBelongToMany);
                    // nambahin question mark itu kaya js jaga jaga kalo dia nul kaga lanjut 
                    for ($i = 0; $i < $length; $i++) {
                        $pekerjaUtamas = $userBarangServices->customersBelongToMany[$i];
                        if ($pekerjaUtamas->pivot->pekerja_utama) {
                            $pekerjaUtama = $pekerjaUtamas;
                        } else {
                            $helper[] = $pekerjaUtamas;
                        }
                    }
                    return Inertia::render('Admin/UserBarangService/DetailUserBarangService', compact("userBarangServices", "pekerjaUtama", "helper"));
                }
            } catch (\Throwable $th) {
                throw $th;
            }
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    // public function edit(UserBarangService $userBarangService)
    // {
    //     //
    // }

    // /**
    //  * Update the specified resource in storage.
    //  */
    // public function update(UpdateUserBarangServiceRequest $request, UserBarangService $userbarangservice)
    // {
    //     //
    // }

    /**
     * Hapus seluruh helper dan pekerja utama Table user_barang_service yang berkaitan
     */
    public function destroy(UserBarangService $userBarangService)
    {
    }

    public function selesai(UserBarangService $userBarangService, Request $request)
    {
        $userBarangService->status = BarangStatusEnum::SELESAI->value;

        if ($userBarangService->save()) {
            if (CustomerEmailInfoController::index($userBarangService->barang_service_id)) {
                return redirect()->route('userbarangservice.show', $userBarangService->id);
            } else {
                abort(404);
            };
        } else {
            abort(403);
        }
        abort(403);
    }
}
