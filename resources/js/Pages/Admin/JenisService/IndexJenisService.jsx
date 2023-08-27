import NavLink from "@/Components/NavLink";
import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import PaginateAdmin from "@/Components/PaginateAdmin";
import ModalImage from "@/Components/ModalImage";
import { Link, router } from "@inertiajs/react";

const headers = {
    title: "List Jenis Service",
    description: "Upload Jenis Service Baru Yang Tersedia ",
    open: true,
};

const IndexJenisService = ({ JenisServices }) => {
    function delteJenisService(id) {
        router.delete(route("JenisService.destroy", id));
    }
    
    console.log(JenisServices.data);
    return (
        <AuthenticatedLayout headers={headers}>
            <Link className="btn btn-sm" href={route("JenisService.create")}>
                Add Jenis Service
            </Link>
            <div className="overflow-x-auto min-w-full ">
                <table className="table">
                    <thead>
                        <tr className="text-gray-100">
                            <th>Judul</th>
                            <th>Sub Judul</th>
                            <th>Kategori</th>
                            <th>blog / Isi Blog</th>
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
                                    <div className="flex flex-col">
                                        {data.kategori
                                        ? 
                                        <div className="flex gap-3 scrollbar-thin pb-3 scrollbar-w-0 max-w-xs overflow-auto">
                                        {
                                            data.kategori.map((kategoriD,key) => (
                                                <div key={key} className="badge ">
                                                {kategoriD}
                                                </div>
                                            ))
                                        }
                                        </div>
                                        : null
                                        }
                                    </div>
                                </th>
                                <th>
                                    <div>
                                        {/* href={route('JenisService.')} */}
                                        <Link className="btn btn-sm">
                                            Lihat Blog
                                        </Link>
                                    </div>
                                </th>
                                <th>
                                    <div className="flex flex-col ">
                                        <ModalImage>
                                            <div className="rounded">
                                                <img
                                                    src={
                                                        "/storage/" + data.icon
                                                    }
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
                                        <Link
                                            href={route(
                                                "JenisService.edit",
                                                data.id
                                            )}
                                            className="btn btn-sm bg-stone-200"
                                        >
                                            {" "}
                                            Edit{" "}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="1em"
                                                viewBox="0 0 512 512"
                                            >
                                                <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
                                            </svg>{" "}
                                        </Link>
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
