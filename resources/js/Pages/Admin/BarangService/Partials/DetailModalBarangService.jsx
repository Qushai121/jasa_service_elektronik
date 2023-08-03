import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Modal from "@/Components/Modal";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { Link, router, useForm, usePage } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import ModalImage from "@/Components/ModalImage";

export default function DetailModalBarangService({ barangServices, children }) {
    const [tutup, setTutup] = useState(false);
    const [gambar, setGambar] = useState("");
    
    const { data, setData, post, processing, errors } = useForm({
        nama_barang: barangServices.nama_barang,
        keluhan_barang: barangServices.keluhan_barang,
    });

    const user = usePage().props.auth.user;

    const submit = (e) => {
        e.preventDefault();
        router.post(route("barangservice.update", barangServices.id), {
            _method: "put",
            ...data,
            gambar_barang: gambar,
        });
    };

    return (
        <>
            <PrimaryButton
                className="btn btn-sm m-2"
                onClick={() => setTutup(!tutup)}
            >
                Detail Barang
            </PrimaryButton>
            <Modal show={tutup} onClose={() => setTutup(!tutup)}>
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button
                        onClick={() => setTutup(!tutup)}
                        type="button"
                        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    >
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                    <div className="px-6 py-6 lg:px-8">
                        <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                            Detail Barang
                        </h3>
                        <form
                            onSubmit={submit}
                            className="space-y-6"
                            encType="multipart/form-data"
                        >
                            <div>
                                <InputLabel
                                    htmlFor="nama_barang"
                                    value="Nama Barang"
                                />
                                <TextInput
                                    id="nama_barang"
                                    type="text"
                                    name="nama_barang"
                                    defaultValue={barangServices.nama_barang}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("nama_barang", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.nama_barang}
                                    className="mt-2"
                                />
                            </div>
                            <div>
                                <InputLabel
                                    htmlFor="keluhan_barang"
                                    value="Keluhan Barang"
                                />
                                <TextInput
                                    id="keluhan_barang"
                                    type="text"
                                    name="keluhan_barang"
                                    defaultValue={barangServices.keluhan_barang}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData(
                                            "keluhan_barang",
                                            e.target.value
                                        )
                                    }
                                />
                                <InputError
                                    message={errors.keluhan_barang}
                                    className="mt-2"
                                />
                            </div>
                            <div>
                                <InputLabel
                                    htmlFor="gambar_barang"
                                    value="Gambar Barang"
                                />
                                <div className="flex " >         
                                <div className="avatar">
                                    <div className="w-24 rounded">
                                        <img
                                            src={
                                                "/storage/" +
                                                barangServices.gambar_barang
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center mx-2">
                                <a  href={ "/storage/" + barangServices.gambar_barang} className="btn btn-sm" >Lihat Gambar</a>
                                </div>
                                </div>
                                {user.role_id == 2 && (
                                    <>
                                        <TextInput
                                            id="gambar_barang"
                                            type="file"
                                            name="gambar_barang"
                                            // value={data.gambar_barang}
                                            className="mt-1 block w-full"
                                            autoComplete="username"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setGambar(e.target.files[0])
                                            }
                                        />
                                        <InputError
                                            message={errors.gambar_barang}
                                            className="mt-2"
                                        />
                                    </>
                                )}
                            </div>
                            {user.role_id == 2 || user.role_id == 3    ?
                                <button type="submit" className="btn">
                                    Edit
                                </button>
                                :<></>
                            }
                        </form>
                    </div>
                </div>
            </Modal>
        </>
    );
}
