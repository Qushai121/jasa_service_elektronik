import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Modal from "@/Components/Modal";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/react";

export default function AddBarangService({ children }) {
    const [tutup, setTutup] = useState(false);
    console.log(tutup);

    const { data, setData, post, processing, errors } = useForm({
        
      })

      console.log(data);

    return (
        <>
            <button className="btn btn-sm m-2" onClick={() => setTutup(!tutup)}>
                Tambah Barang
            </button>
            <Modal show={tutup} onClose={() => setTutup(!tutup)}>
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button
                    onClick={() => setTutup(!tutup)}
                        type="button"
                        class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    >
                        <svg
                            aria-hidden="true"
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </button>
                    <div class="px-6 py-6 lg:px-8">
                        <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                            Tambah Barang Masuk
                        </h3>
                        <form class="space-y-6" >
                            <div>
                                <InputLabel htmlFor="nama_customer" value="Nama Customer" />
                                <TextInput
                                    id="nama_customer"
                                    type="text"
                                    name="nama_customer"
                                    // value={data.nama_customer}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    // onChange={(e) =>
                                    //     setData("nama_customer", e.target.value)
                                    // }
                                />
                                <InputError
                                    // message={errors.nama_customer}
                                    className="mt-2"
                                />
                            </div>
                            <div>
                                <InputLabel htmlFor="nama_barang" value="Nama Barang" />
                                <TextInput
                                    id="nama_barang"
                                    type="text"
                                    name="nama_barang"
                                    // value={data.nama_barang}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    // onChange={(e) =>
                                    //     setData("nama_barang", e.target.value)
                                    // }
                                />
                                <InputError
                                    // message={errors.nama_barang}
                                    className="mt-2"
                                />
                            </div>
                            <div>
                                <InputLabel htmlFor="gambar_barang" value="Gambar Barang" />
                                <TextInput
                                    id="gambar_barang"
                                    type="file"
                                    name="gambar_barang"
                                    // value={data.gambar_barang}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    // onChange={(e) =>
                                    //     setData("gambar_barang", e.target.value)
                                    // }
                                />
                                <InputError
                                    // message={errors.gambar_barang}
                                    className="mt-2"
                                />
                            </div>
                            <div>
                                <InputLabel htmlFor="keluhan_barang" value="keluhan Barang" />
                                <TextInput
                                    id="keluhan_barang"
                                    type="text"
                                    name="keluhan_barang"
                                    // value={data.keluhan_barang}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("keluhan_barang", e.target.value)
                                    }
                                />
                                <InputError
                                    // message={errors.keluhan_barang}
                                    className="mt-2"
                                />
                            </div>
                            <button class="btn">Tambah</button>
                        </form>
                    </div>
                </div>
            </Modal>
        </>
    );
}
