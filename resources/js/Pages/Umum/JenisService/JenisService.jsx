import Divider from "@/Components/Divider";
import { HeaderTitleUmum } from "@/Components/HeaderTitleUmum";
import { UmumLayout } from "@/Layouts/umum/UmumLayout";
import { BigMxWrapper } from "@/Layouts/wrapper/BigMxWrapper";
import React from "react";
import { Filter } from "./partials/Filter";
import { Head, Link } from "@inertiajs/react";

const content = "Temukan beragam layanan perbaikan dan perawatan elektronik unggulan kami. Mulai dari perbaikan hardware hingga pemulihan data, kami memiliki solusi lengkap untuk kebutuhan perangkat elektronik Anda. Dapatkan pelayanan handal dan profesional dari tim ahli kami untuk menjaga perangkat Anda tetap berfungsi secara optimal."

const JenisService = ({ JenisServices }) => {
    console.log(JenisServices);
    return (
        <UmumLayout>
            <Head>
  <title>Jenis Service</title>
  <meta name="description" content={content} />
</Head>
            <HeaderTitleUmum
                images={"images/hello-mrgeorge.jpg"}
                title={"Jenis Jenis Service Yang Kami Sediakan"}
                subTitle={
                    "Silahkan Melihat Apa Saja Barang Yang Bisa Kami Service"
                }
            />
            <div>
                <div className=" mx-2 lg:mx-36">
                    <div className="flex lg:flex-row flex-col gap-10 ">
                        <Filter JenisServices={JenisServices} />
                        <div className=" h-full flex py-5 flex-wrap  gap-5 text-whiteMain">
                            {JenisServices?.data?.map((data, key) => (
                                <Link
                                href={route('jenisServiceUmum.show',data.id)}
                                    key={key}
                                    className="lg:w-[20%] bg-whiteMain text-blackMain py-2 lg:pb-6 shadow-lg hover:shadow-none duration-300"
                                >
                                    <div className="my-4 mx-5">
                                        <p className="text-sm ">Laptop</p>
                                    </div>
                                    <div className=" lg:h-[54%] ">
                                        <img
                                            src={
                                                "/storage/" +
                                                data.background_foto
                                            }
                                            className="w-full h-44 object-cover"
                                        />
                                    </div>
                                    <div className="px-4 py-3">
                                        <h5 className="text-bold break-words text-lg line-clamp-1">
                                            {data.judul}
                                        </h5>
                                        <h4 className="mt-3 h-full break-words text-sm line-clamp-3">
                                            {data.sub_judul}
                                        </h4>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </UmumLayout>
    );
};

export default JenisService;
