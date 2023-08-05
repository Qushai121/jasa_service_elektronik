import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Modal from "@/Components/Modal";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { router, useForm, usePage } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import ReactQuill from "react-quill";
import { ReactQuillInput } from "@/Components/ReactQuillInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function EditJenisService({ JenisService }) {
    const [tutup, setTutup] = useState(false);
    const [backgroundFoto, setBackgroundFoto] = useState("");
    const [icon, setIcon] = useState("");

    const { data, setData, post, processing, errors, reset } = useForm({
        judul: JenisService.judul,
        sub_judul: JenisService.sub_judul,
        blog: JenisService.blog,
    });

    const submit = (e) => {
        e.preventDefault();
        router.post(route("JenisService.update", JenisService.id), {
            _method: "put",
            ...data,
            background_foto: backgroundFoto,
            icon: icon,
        });
    };

    console.log(data);
    return (
        <AuthenticatedLayout>
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
                                defaultValue={JenisService.judul}
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
                                defaultValue={JenisService.sub_judul}
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
                                    setBackgroundFoto(e.target.files[0])
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
                                onChange={(e) => setIcon(e.target.files[0])}
                            />
                            <InputError
                                message={errors.icon}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <InputLabel
                                htmlFor="judul"
                                value="judul Jenis Service"
                            />
                            <div className="bg-white mt-2">
                                <ReactQuillInput
                                    defaultValue={JenisService.blog}
                                    onChange={(value) => {
                                        setData("blog", value);
                                    }}
                                />
                            </div>
                        </div>

                        <button type="submit" className="btn">
                            Edit
                        </button>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
