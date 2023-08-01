import Divider from "@/Components/Divider";
import { HeaderTitleUmum } from "@/Components/HeaderTitleUmum";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import { TitleTwoXl } from "@/Components/TitleTwoXl";
import { UmumLayout } from "@/Layouts/umum/UmumLayout";
import { BigMxWrapper } from "@/Layouts/wrapper/BigMxWrapper";
import { Head } from "@inertiajs/react";
import React from "react";

const Bantuan = () => {
    return (
        <UmumLayout>
            <Head title="Bantuan" />
            <HeaderTitleUmum images={'images/bg-bantuan.jpg'} title={'Form Bantuan Customer'} subTitle={'kirimkan pesan minta bantuan anda '} />
            <BigMxWrapper className={"h-fit py-8 "}>
                <BigMxWrapper className="h-fit">
                    <form>
                        <div className="mt-4">
                            <label htmlFor="nama" value="nama">
                                Nama Anda :
                            </label>
                            <input
                                id="nama"
                                required
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
                                htmlFor="nomor_telepon"
                                value="nomor_telepon"
                            >
                                Nomor telepon yang bisa dihubungi kami :
                            </label>
                            <input
                                id="nomor_telepon"
                                required
                                type="number"
                                name="nomor_telepon"
                                className="mt-1 block w-full bg-gray-100"
                                autoComplete="username"
                                onChange={(e) =>
                                    setData("nomor_telepon", e.target.value)
                                }
                            />
                            {/* <InputError message={errors.nama} className="mt-2" /> */}
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="pesan_bantuan"
                                value="pesan_bantuan"
                            >
                                Pesan Bantuan Anda :
                            </label>
                            <textarea
                                required
                                id="pesan_bantuan"
                                type="text"
                                name="pesan_bantuan"
                                className="mt-1 h-[20vh] block w-full bg-gray-100"
                                autoComplete="current-pesan_bantuan"
                                onChange={(e) =>
                                    setData("pesan_bantuan", e.target.value)
                                }
                            />

                            {/* <InputError message={errors.password} className="mt-2" /> */}
                        </div>
                        <div className="flex items-center justify-end mt-4">
                            <PrimaryButton className="ml-4">
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
