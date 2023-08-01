import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import DetailCustomer from "../Customer/Partials/DetailModalCostumer";
import NavLink from "@/Components/NavLink";
import PaginateAdmin from "@/Components/PaginateAdmin";
import ModalImage from "@/Components/ModalImage";
import Modal from "@/Components/Modal";

const IndexuserBarangService = ({ userBarangService,auth }) => {
    const headers = {
        title: `List Pekerjan ${auth.user.name} `,
        description: "Selesai Kan Pekerjaan Yang Sudah Di Ambil",
        open: true,
    };
    return (
        <AuthenticatedLayout headers={headers}>
            <div className=" my-4 ">
                <div className="overflow-x-auto ">
                    <table className="table overflow-x-hidden">
                        <thead>
                            <tr className="text-gray-100">
                                <th>Nama Barang</th>
                                <th>Keluhan Barang</th>
                                <th>Gambar Barang</th>
                                <th>Detail Customer</th>
                                <th>Detail Status</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userBarangService.data[0].barangservices.map(
                                (data, i) => (
                                    <tr key={i} className="text-gray-100">
                                        <th>
                                            <div className="flex flex-col ">
                                                <p>{data.nama_barang}</p>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="flex flex-col gap-2 w-fit">
                                                {/* <p>{data.keluhan_barang}</p> */}
                                                <p>{data.keluhan_barang}</p>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="flex flex-col gap-2 w-fit">
                                                {/* <p>{data.keluhan_barang}</p> */}
                                                <ModalImage>
                                                    <div className="">
                                                        <div className="rounded">
                                                            <img
                                                                src={
                                                                    "/storage/" +
                                                                    data.gambar_barang
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </ModalImage>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="flex flex-col gap-2">
                                                <div>
                                                    <NavLink
                                                        className="btn btn-sm"
                                                        href={route(
                                                            "customer.show",
                                                            data.customer_id
                                                        )}
                                                    >
                                                        <p className="text-gray-800 text-sm  ">
                                                            Detail Customer
                                                        </p>
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </th>
                                        <th>
                                            <NavLink
                                                className="btn btn-sm"
                                                href={route(
                                                    "userbarangservice.update",
                                                    data.pivot.barang_service_id
                                                )}
                                            >
                                                <p className="text-black">
                                                    Detail Status
                                                </p>
                                            </NavLink>
                                        </th>
                                        {data.pivot.pekerja_utama >= 1 && (
                                            <th>
                                                <div className="flex items-center gap-2">
                                                    <PrimaryButton
                                                        className="btn btn-sm "
                                                        onClick={() =>
                                                            deleteCustomer(
                                                                data.id
                                                            )
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

                                                    <PrimaryButton>
                                                        Selesai
                                                    </PrimaryButton>
                                                </div>
                                            </th>
                                        )}
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <PaginateAdmin data={userBarangService} />
        </AuthenticatedLayout>
    );
};

export default IndexuserBarangService;
