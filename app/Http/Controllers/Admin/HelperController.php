<?php

namespace App\Http\Controllers\Admin;

use App\Enums\BarangStatusEnum;
use App\Http\Controllers\Controller;
use App\Models\UserBarangService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\Rule;

class HelperController extends Controller
{
    public function askHelp(UserBarangService $userBarangService, Request $request)
    {
       
        $dataFromReq = $request->all();
        abort_if($userBarangService->user_id != $dataFromReq['user_id'], 403);
        abort_if($userBarangService->barang_service_id != $dataFromReq['barang_service'], 403);
        $userBarangService->update([
            'askhelp' => $dataFromReq['askhelp'],
            'status' => BarangStatusEnum::BANTUAN->value,
        ]);
        return redirect()->back();
    }

    public function stopHelp(UserBarangService $userBarangService,Request $request){

    }

    public function addHelper(UserBarangService $userBarangService, Request $request)
    {
        $dataFromReq = $request->all();
        $datas = UserBarangService::where($request->post())->first();
        // Kalo dah nge bantu g bisa bantui lagi / cegah spam
        abort_if(!empty($datas), 403);
        abort_if($userBarangService->barang_service_id != $dataFromReq['barang_service_id'], 403);

        $MergeRequestWithId = array_merge(
            $request->post(),
            ['status' => BarangStatusEnum::HELPER->value],
        );
        UserBarangService::create($MergeRequestWithId);
            return to_route('userbarangservice.show',$userBarangService->barang_service_id);

    }

    public function givePekerjaanUtama(UserBarangService $userBarangService, Request $request)
    {
        abort_if($userBarangService->user_id != auth()->user()->id, 403);
        $MergeRequestWithStatus = array_merge(
            $request->except('helper_id'),
            ['status' => BarangStatusEnum::HELPER->value],
            ['pekerja_utama' => 0],
            ['askhelp' => 0],
        );
        $res = $userBarangService->update($MergeRequestWithStatus);
        
        if ($res) {
            $dataHelperRequest = [
                'barang_service_id' => $request->post('barang_service_id'),
                'user_id' => $request->post('helper_id'),
            ];
            $data = UserBarangService::where($dataHelperRequest)->update([
                'pekerja_utama' => 1,
                'status' => BarangStatusEnum::BANTUAN->value,
                'askhelp' => 0
            ]);
            
            return to_route('userbarangservice.show',$userBarangService->barang_service_id);
        }
        return to_route('userbarangservice.show',$userBarangService->barang_service_id);
    }

    public function leaveJob(UserBarangService $userBarangService, Request $request)
    {
        abort_if($userBarangService->id != $request->id,404);
        abort_if($userBarangService->user_id != auth()->user()->id,404);
        $userBarangService->delete();
        
        return redirect()->to(route('userbarangservice.show',$userBarangService->barang_service_id));
    }
    
}
