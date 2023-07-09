import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Transition } from "@headlessui/react";
import React from "react";

export const BarangServiceForm = ({ barangservices }) => {
    const { nama_barang, gambar_barang, keluhan_barang } = barangservices;
    function submit(params) {}
    console.log(barangservices);
    return (
        <section>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    Barang Service
                </h2>
            </header>
            {/* <div className="mt-4">
        <img
            className="w-52 h-44 rounded-lg object-cover"
            src={`/storage/${avatar}}`}
        />
    </div> */}
            <form
                onSubmit={submit}
                className="mt-6 space-y-6"
                encType="multipart/form-data"
            >
                {/* <div className="text-white">
            Jabatan Penanggung Jawab :{" "}
            <span className="text-lg">{role.role_name}</span>
        </div> */}
                <div>
                    <InputLabel htmlFor="nama_barang" value="Name" />
                    <TextInput
                        id="nama_barang"
                        className="mt-1 block w-full"
                        defaultValue={nama_barang}
                        onChange={(e) => setData("nama_barang", e.target.value)}
                        required
                        isFocused
                        autoComplete="nama_barang"
                    />
                    <InputError className="mt-2" message={""} />
                </div>
                <div>
                    <InputLabel
                        htmlFor="keluhan_barang"
                        value="keluhan_barang"
                    />
                    <textarea
                        id="keluhan_barang"
                        className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm "
                        defaultValue={keluhan_barang}
                        onChange={(e) =>
                            setData("keluhan_barang", e.target.value)
                        }
                    ></textarea>
                    <InputError className="mt-2" message={""} />
                </div>
                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={false}>Save</PrimaryButton>

                    <Transition
                        show={true}
                        enterFrom="opacity-0"
                        leaveTo="opacity-0"
                        className="transition ease-in-out"
                    >
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Saved.
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
};
