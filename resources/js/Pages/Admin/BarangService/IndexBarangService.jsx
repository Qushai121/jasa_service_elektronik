import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Header from "./Partials/Header";
import PrimaryButton from "@/Components/PrimaryButton";
import PaginateAdmin from "@/Components/PaginateAdmin";
import { useForm, usePage } from "@inertiajs/react";
import DetailModalBarangService from "./Partials/DetailModalBarangService";
import DetailModalCustomer from "../Customer/Partials/DetailModalCostumer";
import NavLink from "@/Components/NavLink";

const IndexBarangService = ({ barangServices, auth }) => {
    console.log(barangServices);
    const { data, setData, delete: destroy, processing, errors } = useForm({});
    function deleteBarang(id) {
        destroy(route("barangservice.destroy", id));
    }

    return (
        <AuthenticatedLayout>
            <Header />
            <div className="overflow-x-auto w-[100vw] lg:w-full ">
                <table className="table">
                    <thead>
                        <tr className="text-gray-100">
                            <th>Nama Customer</th>
                            <th>Detail Barang</th>
                            <th>Status Proses</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {barangServices.data.map((data, i) => (
                            <tr key={i} className="text-gray-100">
                                <th>
                                    <div className="flex flex-col ">
                                        <DetailModalCustomer
                                            customer={data.customers}
                                            barangServices={data}
                                        />
                                        <p className="badge ">
                                            {data?.customers?.nama ||
                                                "pemilik tidak Ada"}
                                        </p>
                                    </div>
                                </th>
                                <th>
                                    <div className="flex flex-col gap-2 w-fit">
                                        <DetailModalBarangService
                                            barangServices={data}
                                        />
                                        <p className="badge">
                                            {data.nama_barang}
                                        </p>
                                    </div>
                                </th>
                                <th>
                                    <div className="flex flex-col gap-2">
                                    {data.customers_belong_to_many.length > 0 ?
                                    <div >
                                        <NavLink className="btn btn-sm" 
                                        href={route('userbarangservice.show',data.id)}>Detail</NavLink>
                                    </div>
                                    :<PrimaryButton >Ambil Job</PrimaryButton>
                                    }
                                        {/* <NavLink className="btn btn-sm" 
                                        href={route('userbarangservice.show',data.customers_belong_to_many[0].pivot.id)}>Detail</NavLink> */}
                                        {/* <p className="badge badge-error whitespace-nowrap" >Tidak Bisa Diperbaiki</p> */}
                                        {/* <p className="badge badge-error whitespace-nowrap">
                                        Belum Di Proses
                                    </p> */}
                                        <p className="badge badge-info whitespace-nowrap">
                                            Di Proses
                                        </p>
                                        <p className="badge badge-warning whitespace-nowrap">
                                            Perlu Bantuan
                                        </p>
                                        {/* <p className="badge badge-success whitespace-nowrap" >Selesai</p> */}
                                    </div>
                                </th>

                                <th className="flex gap-3">
                                    <PrimaryButton
                                        onClick={() => deleteBarang(data.id)}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="1em"
                                            viewBox="0 0 448 512"
                                        >
                                            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                                        </svg>
                                    </PrimaryButton>
                                    <PrimaryButton>Selesai</PrimaryButton>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <PaginateAdmin data={barangServices} />
        </AuthenticatedLayout>
    );
};

export default IndexBarangService;
