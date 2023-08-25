import { TitleTwoXl } from "@/Components/TitleTwoXl";
import { BigMxWrapper } from "@/Layouts/wrapper/BigMxWrapper";
import { Link } from "@inertiajs/react";
import React from "react";

const SelematDatangMenus = [
    {
        keterangan: "Profesional Tim",
    },
    {
        keterangan: "Tenaga Kerja Bersertifikat",
    },
    {
        keterangan: "Fedback Pelanggan Cepat",
    },
];

export const SelematDatang = () => {
    
    return (
        <section className="py-12 ">
            <BigMxWrapper>
                <div className="flex flex-col xl:flex-row gap-6 px-2 xl:px-40">
                    <div
                        style={{
                            backgroundImage: `url(${`/images/bg-masjohn.jpg`})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        className="bg-stone-200 w-[26rem] h-[35rem] relative"
                    >
                        <div className="h-fit w-64 py-4 px-6 text-whiteMain shadow-lg shadow-blackMain bg-blackThird absolute duration-300 xl:-left-28 left-0">
                            <TitleTwoXl>7 Tahun Pengalaman </TitleTwoXl>
                            <p className="mt-2 text-sm">
                                Pengalaman Elctronika yang sangat baik.
                            </p>
                        </div>
                        <div className="h-fit w-72 py-4 px-6 text-whiteMain shadow-lg shadow-blackMain bg-blueMain absolute xl:-left-32 top-52">
                            <TitleTwoXl>Tim Profesional </TitleTwoXl>
                            <p className="mt-2 text-sm">
                                Memiliki Team profesional Yang sudah di latih
                                oleh profesional.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1">
                        {/* <p>perkenalan tentang kami</p> */}
                        <TitleTwoXl className={"my-4 text-[20px] "}>
                            Selamat Datang Di Website Service sir
                        </TitleTwoXl>
                        <TitleTwoXl
                            className={"text-[35px] my-4 leading-9 "}
                        >
                            layanan elektronik terkemuka yang siap memenuhi kebutuhan pelanggan.
                        </TitleTwoXl>
                        {/* Kami adalah Tim Profesional yang Berdedikasi untuk Layanan Perbaikan Elektronik Terbaik & Rekonstruksi */}
                        <p className="font-montserrat font-medium">
                            misi kami adalah memberikan solusi terbaik dan
                            inovatif untuk memperbaiki dan meningkatkan
                            pengalaman elektronik Anda.
                        </p>
                        <div className=" pb-7 overflow-y-scroll scrollbar-none">
                            <div className=" mt-4 flex xl:gap-2 flex-col xl:flex-row xl:flex-wrap overflow-hidden  ">
                                {SelematDatangMenus.map((data, key) => (
                                    <div key={key} className=" h-8 p-2 flex items-center gap-4 xl:w-[45%]">
                                        <svg
                                            className="fill-blueMain"
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="1.2em"
                                            viewBox="0 0 448 512"
                                        >
                                            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                                        </svg>
                                        <p className="font-light">
                                            {data.keterangan}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Link className="bg-blueSecondary shadow-lg w-fit py-3 px-4 rounded-md font-medium text-whiteMain ">Service Sekarang</Link>
                    </div>
                </div>
            </BigMxWrapper>
        </section>
    );
};
