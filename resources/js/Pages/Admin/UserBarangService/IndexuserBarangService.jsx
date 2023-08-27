import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useState } from "react";
import DetailCustomer from "../Customer/Partials/DetailModalCostumer";
import NavLink from "@/Components/NavLink";
import PaginateAdmin from "@/Components/PaginateAdmin";
import ModalImage from "@/Components/ModalImage";
import Modal from "@/Components/Modal";
import { Role } from "@/lib/role";
import { ToastContainer } from "react-toastify";

const IndexUserBarangService = ({ userBarangService,auth }) => {
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
                            </tr>
                        </thead>
                        <tbody>
                            {
                            userBarangService?.data?.map(
                                (data, i) => {
                                    if(!data.barangservices.length){
                                        return null
                                    };
                                    const {nama_barang,keluhan_barang,gambar_barang,customer_id} = data.barangservices[0]
                                    return(
                                    <tr key={i} className="text-gray-100">
                                        <th>
                                            <div className="flex flex-col ">
                                                <p>{nama_barang}</p>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="flex flex-col gap-2 w-fit">
                                                {/* <p>{keluhan_barang}</p> */}
                                                <p>{keluhan_barang}</p>
                                            </div>
                                        </th>
                                        <th>
                                            <div className="flex flex-col gap-2 w-fit">
                                                {/* <p>{keluhan_barang}</p> */}
                                                <ModalImage>
                                                    <div className="">
                                                        <div className="rounded">
                                                            <img
                                                                src={
                                                                    "/storage/" +
                                                                    gambar_barang
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
                                                         customer_id
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
                                            {console.log(data)}
                                            <NavLink
                                                className="btn btn-sm"
                                                href={route(
                                                    "userbarangservice.update",
                                                   data.barang_service_id
                                                )}
                                            >
                                                <p className="text-black">
                                                    Detail Status
                                                </p>
                                            </NavLink>
                                        </th>
                                    </tr>
                                )}
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
            <PaginateAdmin data={userBarangService} />
        </AuthenticatedLayout>
    );
};

export default IndexUserBarangService;