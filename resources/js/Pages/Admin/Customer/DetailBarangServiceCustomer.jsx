import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useEffect, useState } from "react";
import DetailBarangService from "../BarangService/Partials/DetailModalBarangService";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link, router } from "@inertiajs/react";
import AddModalBarangService from "../BarangService/Partials/AddModalBarangService";
import { CustomerCard } from "@/Components/CustomerCard";
import { BadgeStatus } from "@/Components/BadgeStatus";
import { AmbilJob } from "../BarangService/Partials/AmbilJob";
import Swal from "sweetalert2";

export default function DetailBarangServiceCustomer({ customers, auth }) {
    const [authorized, setAuthorized] = useState(false);
    useEffect(() => {
        if (
            customers.user_id == auth.user.id &&
            auth.user.role_id != 4 &&
            auth.user.role_id != 1
        ) {
            setAuthorized(true);
        }
    }, []);

    function deleteBarang(id,status) {
        if(status){

            Swal.fire({
                title: 'Ingin Menghapus Paksa Barang Ini ?',
            
                text: `barang dalam pekerjaan dan berstatus ${status}`,
                showDenyButton: true,
                confirmButtonText: 'Hapus',
                denyButtonText: `Batal`,
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    router.delete(route("barangservice.destroy", id),{
                        status:status
                    });
                    Swal.fire('Saved!', '', 'success')
                    return
                } else if (result.isDenied) {
                    Swal.fire('Changes are not saved', '', 'info')
                    return
                }
                return
            })
        }else{
            router.delete(route("barangservice.destroy", id),{
                status:status
            });
        }
            
        }
    return (
        <AuthenticatedLayout>
            {authorized && <AddModalBarangService customers={customers} />}
            <div className="text-white modal-box bg-gray-500 ">
                <CustomerCard customers={customers} />
            </div>
            <div className="overflow-x-auto w-[100vw] xl:w-full ">
                <table className="table">
                    <thead>
                        <tr className="text-gray-100">
                            <th>Detail Barang</th>
                            <th>Status Proses</th>
                            {authorized && <th>Aksi</th>}
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
                                        {data?.customers_belong_to_many[0]
                                            ?.pivot.barang_service_id ? (
                                            <>
                                                <div>
                                                    <Link
                                                        className="btn btn-sm "
                                                        href={route(
                                                            "userbarangservice.show",
                                                            data
                                                                ?.customers_belong_to_many[0]
                                                                ?.pivot
                                                                .barang_service_id
                                                        )}
                                                    >
                                                        Detail
                                                    </Link>
                                                </div>
                                                <BadgeStatus
                                                    status={
                                                        data
                                                            ?.customers_belong_to_many[0]
                                                            ?.status
                                                    }
                                                />
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
                                    </div>
                                </th>

                                {authorized && (
                                    <th className="flex gap-3">
                                        <PrimaryButton
                                            onClick={() =>
                                                deleteBarang(data.id, data
                                                    ?.customers_belong_to_many[0]
                                                    ?.status)
                                            }
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
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout>
    );
}
