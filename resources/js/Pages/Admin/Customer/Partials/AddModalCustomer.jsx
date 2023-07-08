import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Modal from "@/Components/Modal";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { useForm, usePage } from "@inertiajs/react";

export default function AddModalCustomer({  }) {
    const [tutup, setTutup] = useState(false);
    // console.log(customers.id);
    const { data, setData, post, processing, errors, reset } = useForm({
        nama: "",
        nomor_kontak: "",
        email: "",
    });


    const submit = (e) => {
        e.preventDefault();
        post(route("customer.store"), {
            onSuccess: () => {
                reset("nomor_kontak", "email", "nama");
            },
        });
    };

    return (
        <>
            <button className="btn btn-sm m-2" onClick={() => setTutup(!tutup)}>
                Tambah Customer
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
                                    htmlFor="nama"
                                    value="Nama Customer"
                                />
                                <TextInput
                                    id="nama"
                                    type="text"
                                    name="nama"
                                    // value={data.nama}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("nama", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.nama}
                                    className="mt-2"
                                />
                            </div>
                            <div>
                                <InputLabel
                                    htmlFor="nomor_kontak"
                                    value="Nomor Kontak"
                                />
                                <TextInput
                                    id="nomor_kontak"
                                    type="number"
                                    name="nomor_kontak"
                                    // value={data.nomor_kontak}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData(
                                            "nomor_kontak",
                                            e.target.value
                                        )
                                    }
                                />
                                <InputError
                                    message={errors.nomor_kontak}
                                    className="mt-2"
                                />
                            </div>
                            <div>
                                <InputLabel
                                    htmlFor="email"
                                    value="Email Customer"
                                />
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData(
                                            "email",
                                            e.target.value
                                        )
                                    }
                                />
                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                            </div>
                            <button className="btn">Tambah</button>
                        </form>
                    </div>
                </div>
            </Modal>
        </>
    );
}
