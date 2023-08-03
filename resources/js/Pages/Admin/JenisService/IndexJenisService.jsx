import NavLink from "@/Components/NavLink";
import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import AddModalJenisService from "./Partials/AddModalJenisService";
import PaginateAdmin from "@/Components/PaginateAdmin";
import ModalImage from "@/Components/ModalImage";
import { router } from "@inertiajs/react";
import EditJenisService from "./Partials/EditJenisService";

const IndexJenisService = ({ JenisServices }) => {
    function delteJenisService(id) {
        console.log(id);
        router.delete(route("JenisService.destroy", id));
    }
    return (
        <AuthenticatedLayout>
            <AddModalJenisService />
            <div className="overflow-x-auto w-[100vw] lg:w-full ">
                <table className="table">
                    <thead>
                        <tr className="text-gray-100">
                            <th>Judul</th>
                            <th>Sub Judul</th>
                            <th>Keterangan / Isi Blog</th>
                            <th>Icon</th>
                            <th>BG Foto</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {JenisServices?.data?.map((data, i) => (
                            <tr key={i} className="text-gray-100">
                                <th>
                                    <div className="flex flex-col ">
                                        {data.judul}
                                    </div>
                                </th>

                                <th>
                                    <div className="flex flex-col">
                                        {data.sub_judul}
                                    </div>
                                </th>
                                <th>
                                    <div className="flex flex-col ">
                                        {/* perbaikan ! */}
                                        {data.keterangan}
                                    </div>
                                </th>
                                <th>
                                    <div className="flex flex-col ">
                                        <ModalImage>
                                        <div className="rounded">
                                            <img
                                                src={"/storage/" + data.icon}
                                            />
                                        </div>
                                        </ModalImage>
                                    </div>
                                </th>
                                <th>
                                    <div className="flex flex-col ">
                                        <ModalImage>
                                            <div className="rounded">
                                                <img
                                                    src={
                                                        "/storage/" +
                                                        data.background_foto
                                                    }
                                                />
                                            </div>
                                        </ModalImage>
                                    </div>
                                </th>

                                <th>
                                    <div className="flex items-center gap-2">
                                        <PrimaryButton
                                            className="btn btn-sm "
                                            onClick={() =>
                                                delteJenisService(data.id)
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
                                        <EditJenisService JenisService={data} />
                                    </div>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <PaginateAdmin data={JenisServices} />
        </AuthenticatedLayout>
    );
};

export default IndexJenisService;
