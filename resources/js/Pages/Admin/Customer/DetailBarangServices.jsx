import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import DetailBarangService from "../BarangService/Partials/DetailModalBarangService";
import PrimaryButton from "@/Components/PrimaryButton";
import DetailCustomer from "../BarangService/Partials/DetailCostumer";
import AddBarangService from "../BarangService/Partials/AddBarangService";
import { router } from "@inertiajs/react";

const DetailBarangServices = ({ customers,auth }) => {
    function deleteBarang(id) {
        router.delete(route("barangservice.destroy", id));
    }
    return (
        <AuthenticatedLayout>
         {auth.user.role_id != 4 && <AddBarangService customers={customers} />}
            <div className="text-white modal-box bg-gray-500 ">
                <div className="px-4">
                    <h3 class="font-bold text-lg">Pemilik Barang</h3>
                    <div className="px-2 pb-1">{customers.nama}</div>
                    <div class="flex flex-col">
                        <div class="bg-red-100 w-full my-1 h-[1px]"></div>
                        <h3 class="font-bold text-lg">Kontak</h3>
                        <div className="px-2 pb-1">
                            <p>{customers.email}</p>
                            <p>{customers.nomor_kontak}</p>
                        </div>
                        <div class="bg-red-100 w-full my-1 h-[1px]"></div>
                        <h3 class="font-bold text-lg">
                            Jumlah Barang Diservice
                        </h3>
                        <div className="px-2 pb-1">
                            <p>{customers.barangservices.length}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto w-[100vw] lg:w-full ">
                <table className="table">
                    <thead>
                        <tr className="text-gray-100">
                            <th>Detail Barang</th>
                            {/* <th>Di Kerjakan Oleh</th>
                                <th>Harga Reparasi</th>
                                <th>Tanggal Barang Masuk</th>*/}
                            <th>Status Proses</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.barangservices.map((data, i) => (
                            <tr key={i} className="text-gray-100">
                                <th>
                                    <div className="flex flex-col gap-2 w-fit">
                                        <DetailBarangService
                                            barangServices={data}
                                        />
                                        <p className="badge">
                                            {data.nama_barang}
                                        </p>
                                    </div>
                                </th>
                                <th>
                                    <div className="flex flex-col gap-2">
                                        <PrimaryButton>Detail</PrimaryButton>
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
        </AuthenticatedLayout>
    );
};

export default DetailBarangServices;
