import Divider from "@/Components/Divider";
import { TitleTwoXl } from "@/Components/TitleTwoXl";
import { BigMxWrapper } from "@/Layouts/wrapper/BigMxWrapper";
import { Link } from "@inertiajs/react";
import React from "react";

const ServiceTersediaMenus = [
    {
        image: "/images/instalation.png",
        title: "Instalasi",
        keterangan: "Penginstalan barang dikerjakan ahli.",
    },
    {
        image: "/images/maintenance.png",
        title: "Maintenance",
        keterangan: "Memaintance seluruh barang service consumer dengan hati.", //njay
    },
    {
        image: "/images/support.png",
        title: "Memperbaiki",
        keterangan:
            "Memeriksa segala aspek yang dapat menyebabkan kerusakan di kemuadian hari.",
    },
    {
        image: "/images/replace.png",
        title: "Mengganti",
        keterangan: "Memasitikan hanya komponen rusak yang di ganti.",
    },
];

export const ServiceTersedia = () => {
    return (
        <section
            className="h-fit pt-4 pb-8 bg-blueMain"
            style={{
                backgroundImage: `url(${`/images/bg-fixed.png`})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
            }}
        >
            <BigMxWrapper>
                <div className="">
                    <div className="flex flex-col h-full gap-3">
                        <div className="pt-4 mx-2 lg:mx-auto flex flex-col items-center lg:w-[50%]">
                            <TitleTwoXl
                                className={
                                    "text-whiteMain text-[25px] text-center"
                                }
                            >
                                Pelayanan Service Yang Tersedia
                            </TitleTwoXl>
                            <Divider width="lg:w-[7%]" />
                            <p className="text-center text-whiteMain ">
                                Kami Memilik Beberapa Metode - metode service
                                yang efisin dan juga tepat sesuai permintaan
                                pelanggan.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-4 gap-8 lg:h-[50vh] px-6 py-4">
                            <div
                                style={{
                                    backgroundImage: `url(${`/images/bg-main.jpg`})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                                className="bg-stone-200 row-span-2 lg:row-span-4 col-span-2 rounded-sm"
                            ></div>

                            {ServiceTersediaMenus.map((data, key) => (
                                <div key={key} className=" bg-stone-200 rounded-lg p-4 row-span-2 col-span-2 lg:col-span-1 hover:bg-blueSecondary duration-300 group ">
                                    <img
                                        className="w-16 h-16 rounded-lg object-cover group-hover:invert duration-300"
                                        src={data.image}
                                    />
                                    <div className="mt-4">
                                        <p className="text-lg font-semibold group-hover:text-whiteMain duration-300 ">
                                            {data.title}
                                        </p>
                                        <p className="text-sm group-hover:text-whiteMain duration-300">
                                            {data.keterangan}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </BigMxWrapper>
        </section>
    );
};
