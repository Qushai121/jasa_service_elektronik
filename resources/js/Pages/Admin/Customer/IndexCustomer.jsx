import PaginateAdmin from "@/Components/PaginateAdmin";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import Header from "../BarangService/Partials/Header";
import PrimaryButton from "@/Components/PrimaryButton";
import NavLink from "@/Components/NavLink";
import AddCustomer from "./Partials/AddCustomer";
import DetailCustomer from "../BarangService/Partials/DetailCostumer";

const IndexCustomer = ({ customers }) => {
    function deleteBarang(id) {
        destroy(route("barangservice.destroy", id));
    }
    return (
        <AuthenticatedLayout>
            <AddCustomer customers={customers} />
            <div className="overflow-x-auto w-[100vw] lg:w-full ">
                <table className="table">
                    <thead>
                        <tr className="text-gray-100">
                            <th>Nama Customer</th>
                            <th>Kontak Customer</th>
                            {/* <th>Di Kerjakan Oleh</th>
                                <th>Harga Reparasi</th>
                                <th>Tanggal Barang Masuk</th>*/}
                            <th>Barang Yang Dimiliki</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.data.map((data, i) => (
                            <tr key={i} className="text-gray-100">
                                <th>
                                    <div className="flex flex-col ">
                                        <p>{data.nama}</p>
                                    </div>
                                </th>
                                <th>
                                    <div className="flex flex-col gap-2 w-fit">
                                        <p>{data.email}</p>
                                        <p>{data.nomor_kontak}</p>
                                    </div>
                                </th>
                                <th>
                                    <div className="flex flex-col gap-2">
                                        <div>
                                            <NavLink
                                                className="btn btn-sm"
                                                href={route(
                                                    "customer.show",
                                                    data.id
                                                )}
                                            >
                                                Lihat Barang
                                            </NavLink>
                                        </div>
                                    </div>
                                </th>

                                <th className="flex gap-3">
                                    <div>
                                        <PrimaryButton
                                            className="btn btn-sm"
                                            onClick={() =>
                                                deleteBarang(data.id)
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
                                        <DetailCustomer customer={data} />
                                        <PrimaryButton>Selesai</PrimaryButton>
                                    </div>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <PaginateAdmin data={customers} />
        </AuthenticatedLayout>
    );
};

export default IndexCustomer;
