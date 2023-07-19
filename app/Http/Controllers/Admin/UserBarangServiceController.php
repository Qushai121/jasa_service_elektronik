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
        $userBarangService =  UserBarangService::where('barang_service_id', $request->post('barang_service_id'))->first();
        $MergeRequestWithId = array_merge(
            $request->post(),
            !$userBarangService ? ['status' => BarangStatusEnum::DIPROSES->value] : ['status' => BarangStatusEnum::HELPER->value],
            ['askhelp' => 0]
        );
        userBarangService::create($MergeRequestWithId);
        return redirect()->to(route('barangservice.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show($userbarangservice)
    {
        $userBarangServices = BarangService::where('id', $userbarangservice)->orderBy('updated_at','ASC')->with(['customersBelongToMany' => function ($q) {
            // $q->orderBy('created_at', 'ASC');
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
     * Tinggalkan pekerjaan lalu oper pangkat ke 
     */
    public function destroy(UserBarangService $userBarangService)
    {
        //
    }

    public function askHelp(UserBarangService $userBarangService, Request $request)
    {
        $dataFromReq = $request->all();
        // dd($dataFromReq['user_id']);
        abort_if($userBarangService->user_id != $dataFromReq['user_id'], 403);
        abort_if($userBarangService->barang_service_id != $dataFromReq['barang_service'], 403);
        $userBarangService->update([
            'askhelp' => $dataFromReq['askhelp'],
            'status' => BarangStatusEnum::BANTUAN->value,
        ]);
        return redirect()->back();
    }

    public function addHelper(UserBarangService $userBarangService, Request $request)
    {

        $dataFromReq = $request->all();
        $datas = UserBarangService::where($request->post())->first();
        // dd(empty($datas));
        // Kalo dah nge bantu g bisa bantui lagi / cegah spam
        abort_if(!empty($datas),403);
        // dd($userBarangService);
        // dd($dataFromReq);
        abort_if($userBarangService->barang_service_id != $dataFromReq['barang_service_id'], 403);

        $MergeRequestWithId = array_merge(
            $request->post(),
            ['status' => BarangStatusEnum::HELPER->value],
            ['askhelp' => 0]
        );

        // dd($MergeRequestWithId);
         UserBarangService::create($MergeRequestWithId);
        return redirect()->back();
    }
}
