import { FlashMessage } from "@/Components/FlashMessage";
import { HeaderTitleUmum } from "@/Components/HeaderTitleUmum";
import PrimaryButton from "@/Components/PrimaryButton";
import { UmumLayout } from "@/Layouts/umum/UmumLayout";
import { BigMxWrapper } from "@/Layouts/wrapper/BigMxWrapper";
import { Head, useForm, usePage } from "@inertiajs/react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";

const content = "Kami di sini untuk membantu! Temukan panduan lengkap dan informasi kontak untuk mendapatkan bantuan seputar layanan elektronik kami. Tim dukungan kami siap menjawab pertanyaan Anda, memberikan solusi atas masalah Anda, dan memberikan panduan untuk pengalaman penggunaan perangkat yang lebih baik. Hubungi kami atau jelajahi sumber daya bantuan kami untuk mendapatkan informasi yang Anda butuhkan."

const Bantuan = () => {

    const { data, setData, post, processing, errors, reset } = useForm({
        nama: "",
        nomortelp: "",
        pesan: "",
        
    });

    // console.log(usePage().props.flash)
    console.log(processing);
    const submit = (e) => {
        e.preventDefault();
        post(route("bantuan.store"), {
            onSuccess: (e) => {
                Swal.fire({
                    title: 'Berhasil',
                    text: e.props.flash.success,
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
                reset('nama','nomortelp','pesan')
            },
        });
    };

    return (
        <UmumLayout>
            <Head>
  <title>Bantuan</title>
  <meta name="description" content={content} />
</Head>
            <ToastContainer />
            <HeaderTitleUmum images={'images/bg-bantuan.jpg'} title={'Form Bantuan Customer'} subTitle={'kirimkan pesan minta bantuan anda '} />
            <BigMxWrapper className={"h-fit py-8 "}>
                <BigMxWrapper className="h-fit">
                    <form onSubmit={submit} >
                        <div className="mt-4">
                            <label htmlFor="nama" value="nama">
                                Nama Anda :
                            </label>
                            <input
                                id="nama"
                                type="text"
                                name="nama"
                                className="mt-1 block w-full bg-gray-100"
                                autoComplete="username"
                                onChange={(e) =>
                                    setData("nama", e.target.value)
                                }
                            />
                            {/* <InputError message={errors.nama} className="mt-2" /> */}
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="nomortelp"
                                value="nomortelp"
                            >
                                Nomor telepon yang bisa dihubungi kami :
                            </label>
                            <input
                                id="nomortelp"
                                type="number"
                                name="nomortelp"
                                className="mt-1 block w-full bg-gray-100"
                                autoComplete="username"
                                onChange={(e) =>
                                    setData("nomortelp", e.target.value)
                                }
                            />
                            {/* <InputError message={errors.nama} className="mt-2" /> */}
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="pesan"
                                value="pesan"
                            >
                                Pesan Bantuan Anda :
                            </label>
                            <textarea
                                id="pesan"
                                type="text"
                                name="pesan"
                                className="mt-1 h-[20vh] block w-full bg-gray-100"
                                autoComplete="current-pesan"
                                onChange={(e) =>
                                    setData("pesan", e.target.value)
                                }
                            />

                            {/* <InputError message={errors.password} className="mt-2" /> */}
                        </div>
                        <div className="flex items-center justify-end mt-4">
                            <PrimaryButton disabled={processing} type={'submit'} className="ml-4">
                                Kirim
                            </PrimaryButton>
                        </div>
                    </form>
                </BigMxWrapper>
            </BigMxWrapper>
        </UmumLayout>
    );
};

export default Bantuan;
