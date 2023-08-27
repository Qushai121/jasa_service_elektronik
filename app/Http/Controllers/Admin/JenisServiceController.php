<?php

namespace App\Http\Controllers\Admin;

use App\Helper\ImageHelper;
use App\Http\Controllers\Controller;
use App\Models\JenisService;
use App\Http\Requests\StoreJenisServiceRequest;
use App\Http\Requests\UpdateJenisServiceRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class JenisServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
            $JenisServices = JenisService::when($search = $request->get('search'))
            ->where(function ($q) use ($search) {
                $q->where('judul', 'like', "%$search%")
                    ->orWhere('sub_judul', 'like', "%$search%")
                    ->orWhere('kategori', 'like', "%$search%");
            })->paginate($request->get('per_page', 10))->appends('per_page', $request->get('per_page', 10))->withQueryString();

        return Inertia::render('Admin/JenisService/IndexJenisService', compact('JenisServices'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/JenisService/AddJenisService');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreJenisServiceRequest $request)
    {
        // dd($request);
        DB::transaction(function () use ($request) {
            $MergeRequestWithKategori = array_merge(
                $request->validated(),
                ['kategori' => json_encode(explode(',', $request->post('kategori')))]
            );
            $data = JenisService::insertGetId($MergeRequestWithKategori);
            if ($request->file('background_foto')) {
                $background_foto = ImageHelper::ImagePut('background_foto', $request->file('background_foto'));
                JenisService::find($data)->update(['background_foto' => $background_foto]);
            }
            if ($request->file('icon')) {
                $icon = ImageHelper::ImagePut('icon', $request->file('icon'));
                JenisService::find($data)->update(['icon' => $icon]);
            }
        });

        return redirect(route('JenisService.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(JenisService $JenisService)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(JenisService $JenisService)
    {
        return Inertia::render('Admin/JenisService/EditJenisService', compact('JenisService'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateJenisServiceRequest $request, JenisService $JenisService)
    {

        DB::transaction(function () use ($request, $JenisService) {
            $MergeRequestWithKategori = array_merge(
                $request->validated(),
                ['kategori' => json_encode(explode(',', $request->post('kategori')))]
            );
            $JenisService->update($MergeRequestWithKategori);
            if ($request->file('background_foto')) {
                ImageHelper::ImageDelete($JenisService['background_foto']);
                $background_foto = ImageHelper::ImagePut('background_foto', $request->file('background_foto'));
                $JenisService->update(['background_foto' => $background_foto]);
            };
            if ($request->file('icon')) {
                ImageHelper::ImageDelete($JenisService['icon']);
                $icon = ImageHelper::ImagePut('icon', $request->file('icon'));
                $JenisService->update(['icon' => $icon]);
            };
        });
        return redirect()->route('JenisService.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(JenisService $JenisService)
    {
        ImageHelper::ImageDelete($JenisService->icon);
        ImageHelper::ImageDelete($JenisService->background_foto);
        $JenisService->delete();
    }

    public function imageblog(Request $request)
    {
        // masih blm sempurna karena kalau img di apus tetep ke kirim ke file public storage
        $data = ImageHelper::ImagePut('JenisService/blog', $request->file('value'));
        return redirect()->back()->with(['message' => 'http://127.0.0.1:8000/storage/' . $data]);
    }
}
