import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Transition } from "@headlessui/react";
import React from "react";

export const PekerjaForm = ({ pekerja, pekerjaPertama }) => {
    function submit(params) {}
    const { avatar, email, name, id, role, pivot } = pekerja;
    return (
        <section>
            <header>
                {pekerjaPertama ? (
                    <div className="text-xl font-bold flex  p-2 bg-blue-400 rounded-md text-gray-900 dark:text-gray-100">
                        <p className="mx-auto">Pekerja Utama</p>
                    </div>
                ) : (
                    <h2 className="text-lg font-medium flex justify-center p-2 rounded-md bg-gray-400 text-gray-900 dark:text-gray-100">
                        {pivot.status}
                    </h2>
                )}
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Orang Yang Bertanggung Jawab Atas Barang Customer
                </p>
            </header>
            <div className="mt-4">
                <img
                    className="w-52 h-44 rounded-lg object-cover"
                    src={`/storage/${avatar}}`}
                />
            </div>
            <form
                onSubmit={submit}
                className="mt-6 space-y-6"
                encType="multipart/form-data"
            >
                <div className="text-white">
                    Jabatan Penanggung Jawab :{" "}
                    <span className="text-lg">{role.role_name}</span>
                </div>
                <div>
                    <InputLabel htmlFor="name" value="Name" />
                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        defaultValue={name}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />
                    <InputError className="mt-2" message={""} />
                </div>
                <div>
                    <InputLabel htmlFor="email" value="email" />
                    <TextInput
                        id="email"
                        className="mt-1 block w-full"
                        defaultValue={email}
                        onChange={(e) => setData("email", e.target.value)}
                        required
                        isFocused
                        autoComplete="email"
                    />
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
