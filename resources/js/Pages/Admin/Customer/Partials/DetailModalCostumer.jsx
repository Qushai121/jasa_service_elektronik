import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Modal from "@/Components/Modal";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { router, useForm, usePage } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function DetailModalCustomer({
    customer,
    children,
    barangServices,
}) {
    const [tutup, setTutup] = useState(false);
    const user = usePage().props?.auth?.user;

    const { data, setData, put, processing, errors, reset } = useForm({});


    function submit(e) {
        e.preventDefault();
        put(route("customer.update", customer?.id), {
            _method: "put",
            ...data,
        });
    }

    return (
        <>
            <PrimaryButton
                className="btn btn-sm m-2 "
                onClick={() => setTutup(!tutup)}
            >
                <div className="flex gap-1">
                    <p>Detail</p>

                    {user.role_id == 2 || user.role_id == 3 ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 512 512"
                        >
                            <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
                        </svg>
                    ) : (
                        <></>
                    )}
                </div>
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
                            Detail Customer
                        </h3>
                        <form onSubmit={submit} className="space-y-6">
                            <div>
                                <InputLabel
                                    htmlFor="nama"
                                    value="Nama Customer"
                                />
                                <TextInput
                                    id="nama"
                                    type="text"
                                    name="nama"
                                    defaultValue={customer?.nama}
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
                                    htmlFor="nama"
                                    value="Nama Customer"
                                />
                                <TextInput
                                    id="alamat"
                                    type="text"
                                    name="alamat"
                                    defaultValue={customer?.alamat}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("alamat", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.alamat}
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
                                    type="text"
                                    name="nomor_kontak"
                                    defaultValue={customer?.nomor_kontak}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("nomor_kontak", e.target.value)
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
                                    type="text"
                                    name="email"
                                    defaultValue={customer?.email}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                            </div>
                            {user.role_id == 2 || user.role_id == 3 ? (
                                <button type="submit" className="btn">
                                    Edit
                                </button>
                            ) : (
                                <></>
                            )}
                        </form>
                    </div>
                </div>
            </Modal>
        </>
    );
}
