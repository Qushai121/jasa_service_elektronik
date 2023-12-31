import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Modal from "@/Components/Modal";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { useForm, usePage } from "@inertiajs/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ReactQuillInput } from "@/Components/ReactQuillInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
const AddJenisService = ({}) => {
    const [tutup, setTutup] = useState(false);
    // const [blog, setblog] = useState('');
    // console.log(customers.id);
    const { data, setData, post, processing, errors, reset } = useForm({
        judul: "",
        sub_judul: "",
        background_foto: "",
        blog: "",
        icon: "",
        kategori: ""
    });

    console.log(data);
    const submit = (e) => {
        e.preventDefault();
        post(route("JenisService.store"), {
            onSuccess: () => {
                setData(null);
            },
        });
    };
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
                <div className="px-6 py-6 xl:px-8">
                    <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                        Tambah Jenis Service
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
                                htmlFor="kategori"
                                value="Kategori"
                            />
                            <span className="text-whiteMain" >Gunakan Coma Untuk Pisahkan satu kategori dengan yang lain</span>
                            <TextInput
                                id="kategori"
                                type="text"
                                name="kategori"
                                placeholder='kategori1,kategori2,'
                                // value={data.kategori}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                onChange={(e) =>
                                    setData("kategori", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.kategori}
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
                                htmlFor="judul"
                                value="judul Jenis Service"
                            />
                            <div className="bg-white my-2">
                                <ReactQuillInput
                                    onChange={(value) => {
                                        setData("blog", value);
                                    }}
                                />
                            </div>
                        </div>

                        <button className="btn">Tambah</button>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default AddJenisService;
