import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Transition } from "@headlessui/react";
import React from "react";

export const BarangServiceForm = ({ barangservices }) => {
    if (!barangservices) {
        return <></>;
    }
    const { nama_barang, gambar_barang, keluhan_barang } = barangservices;

    return (
        <section >
           

            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    Barang Service
                </h2>
            </header>
            <div className="mt-4">
                <img
                    className="w-52 h-44 rounded-lg object-cover"
                    src={"/storage/" + gambar_barang}
                />
            </div>
            <div>
                <InputLabel htmlFor="nama_barang" value="Name" />
                <TextInput
                    id="nama_barang"
                    className="mt-1 block w-full"
                    defaultValue={nama_barang}
                    disabled
                />
                <InputError className="mt-2" message={""} />
            </div>
            <div>
                <InputLabel htmlFor="keluhan_barang" value="keluhan_barang" />
                <textarea
                    id="keluhan_barang"
                    className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm "
                    defaultValue={keluhan_barang}
                    disabled
                ></textarea>
                <InputError className="mt-2" message={""} />
            </div>
        </section>
    );
};
