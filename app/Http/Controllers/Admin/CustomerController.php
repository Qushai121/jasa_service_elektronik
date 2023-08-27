<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use App\Http\Requests\StoreCustomerRequest;
use App\Http\Requests\UpdateCustomerRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CustomerController extends Controller
{


    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $customersQuery = Customer::where('user_id',auth()->user()->id);
        if ($search = $request->get('search')) {
            $customersQuery->where(
                function ($q) use ($search) {
                    $q->where('nama', 'like', "%$search%")
                    ->orWhere('nomor_kontak','like',"$search%")
                    ->orWhere('email','like',"%$search%");
                }
            );
        }

        $customers = $customersQuery->paginate($request->get('per_page',10))->appends('per_page',$request->get('per_page',10))->withQueryString();
        
        return Inertia::render('Admin/Customer/IndexCustomer', compact('customers'));
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
    public function store(StoreCustomerRequest $request)
    {
        $MergeRequestWithId = array_merge(
            $request->validated(),
            ['user_Id' => auth()->user()->id]
        );

        Customer::insert($MergeRequestWithId);
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Customer $customer)
    {

        $customers = Customer::with(['barangservices' => function ($e) {
            $e->with(['customersBelongToMany' => function ($e) {
                $e->where('pekerja_utama', 1)->select('status');
            }]);
        }])->where('id', $customer->id)->first();

        return Inertia::render('Admin/Customer/DetailBarangServiceCustomer', compact('customers'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Customer $customer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCustomerRequest $request, Customer $customer)
    {
        // ini itu buat mastiin kalo data yang mau di ubah benran data orang yang login ini
        // mirip kaya di ci4 tapi ci 4 langsung di dalem querynya  
        $this->authorize('view', $customer);
        // kalo ini cuman di controller nya karena di paramsnya udah dicariin datanya jadi g bisa query lagi keknya

        $customer->update($request->validated());
        return  redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Customer $customer)
    {
        if ($customer->barangservices()->count() >= 1) {
            return redirect()->back()->with('message', "Hapus dahulu barang yang bersangkutan dengan customer $customer->nama ");
        };

        $this->authorize('view', $customer);
        $customer->delete();
    }
}
