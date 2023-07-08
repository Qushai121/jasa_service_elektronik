import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Transition } from "@headlessui/react";
import React from "react";

export const PekerjaForm = () => {
    function submit(params) {}
    return (
        <section>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    Customer
                </h2>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Update your account's profile Picture
                </p>
            </header>
            {/* <div className="mt-4">
                <img
                    className="w-52 h-44 rounded-lg object-cover"
                    src={`/storage/$}`}
                />
            </div> */}
            <form
                onSubmit={submit}
                className="mt-6 space-y-6"
                encType="multipart/form-data"
            >
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={''}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={''} />
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
