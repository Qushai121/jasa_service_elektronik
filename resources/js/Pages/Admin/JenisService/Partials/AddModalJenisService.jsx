import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Modal from "@/Components/Modal";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { useForm, usePage } from "@inertiajs/react";

export default function AddModalJenisService({}) {
    const [tutup, setTutup] = useState(false);
    // console.log(customers.id);
    const { data, setData, post, processing, errors, reset } = useForm({
        judul: "",
        sub_judul: "",
        background_foto: "",
        keterangan: "",
        icon: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("JenisService.store"), {
            onSuccess: () => {
                reset(
                    "judul",
                    "sub_judul",
                    "background_foto",
                    "keterangan",
                    "icon"
                    );
                },
            });
        };
        

    return (
        <>
            <button className="btn btn-sm m-2" onClick={() => setTutup(!tutup)}>
                Tambah Jenis Wisata
            </button>
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
                            Tambah Customer Masuk
                        </h3>
                        <form
                            onSubmit={submit}
                            className="space-y-6"
                            encType="multipart/form-data"
                        >
                            <div>
                                <InputLabel
                                    htmlFor="judul"
                                    value="judul Jenis Service"
                                />
                                <TextInput
                                    id="judul"
                                    type="text"
                                    name="judul"
                                    // value={data.judul}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("judul", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.judul}
                                    className="mt-2"
                                />
                            </div>

                            <div>
                                <InputLabel
                                    htmlFor="sub_judul"
                                    value="Sub Judul Jenis Service"
                                />
                                <TextInput
                                    id="sub_judul"
                                    type="text"
                                    name="sub_judul"
                                    // value={data.sub_judul}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("sub_judul", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.sub_judul}
                                    className="mt-2"
                                />
                            </div>

                            <div>
                                <InputLabel
                                    htmlFor="background_foto"
                                    value="Background Foto Jenis Service"
                                />
                                <TextInput
                                    id="background_foto"
                                    type="file"
                                    name="background_foto"
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData(
                                            "background_foto",
                                            e.target.files[0]
                                        )
                                    }
                                />
                                <InputError
                                    message={errors.background_foto}
                                    className="mt-2"
                                />
                            </div>
                            <div>
                                <InputLabel
                                    htmlFor="icon"
                                    value="Icon Jenis Service"
                                />
                                <TextInput
                                    id="icon"
                                    type="file"
                                    name="icon"
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("icon", e.target.files[0])
                                    }
                                />
                                <InputError
                                    message={errors.icon}
                                    className="mt-2"
                                />
                            </div>
                            <div>
                                <InputLabel
                                    htmlFor="keterangan"
                                    value="keterangan"
                                />
                                <textarea
                                    id="keterangan"
                                    className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm "
                                    onChange={(e) =>
                                        setData("keterangan", e.target.value)
                                    }
                                ></textarea>
                                <InputError className="mt-2" message={""} />
                            </div>

                            <button className="btn">Tambah</button>
                        </form>
                    </div>
                </div>
            </Modal>
        </>
    );
}
