import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Header from "../../../Layouts/Partials/Header";
import PrimaryButton from "@/Components/PrimaryButton";
import PaginateAdmin from "@/Components/PaginateAdmin";
import { usePage } from "@inertiajs/react";
import DetailModalBarangService from "./Partials/DetailModalBarangService";
import DetailModalCustomer from "../Customer/Partials/DetailModalCostumer";
import NavLink from "@/Components/NavLink";
import { AmbilJob } from "./Partials/AmbilJob";
import { BadgeStatus } from "@/Components/BadgeStatus";

const headers = {
    title: "List Barang Service",
    description: "Ambil Job Dan Bantu Pekerja Lain Yang Perlu bantuan",
    open: true,
};

const IndexBarangService = ({ barangServices, auth }) => {
    

    const pesanJobSudahDiambil = usePage().props.flash.message;

    return (
        <AuthenticatedLayout message={pesanJobSudahDiambil} headers={headers}>
            <div className="overflow-x-auto min-w-full ">
                <table className="table">
                    <thead>
                        <tr className="text-gray-100">
                            <th>Nama Customer</th>
                            <th>Detail Barang</th>
                            <th>Status Proses</th>
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
                                        {data.customers_belong_to_many.length >
                                        0 ? (
                                            <>
                                                <div>
                                                    <NavLink
                                                        className="btn btn-sm"
                                                        href={route(
                                                            "userbarangservice.show",
                                                            data.id
                                                        )}
                                                    >
                                                        Detail
                                                    </NavLink>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <AmbilJob
                                                    auth={auth.user}
                                                    barangId={data.id}
                                                />
                                                <p className="badge badge-error whitespace-nowrap">
                                                    Belum Di Proses
                                                </p>
                                            </>
                                        )}
                                        {data.customers_belong_to_many[0]?.pivot
                                            ?.status ? (
                                            <BadgeStatus
                                                status={
                                                    data
                                                        .customers_belong_to_many[0]
                                                        ?.pivot?.status
                                                }
                                            />
                                        ):null
                                    }
                                    </div>
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
