import { TitleTwoXl } from "@/Components/TitleTwoXl";
import { BigMxWrapper } from "@/Layouts/wrapper/BigMxWrapper";
import { Link } from "@inertiajs/react";
import React from "react";

const PartsMenus = [
    {
        keterangan: "Laptop Dan Parts",
    },
    {
        keterangan: "Charger Smartphone & Laptop",
    },
    {
        keterangan: "Cpu",
    },
    {
        keterangan: "Dinamo",
    },
];

export const Parts = () => {
    return (
        <section className="py-8 my-10">
            <BigMxWrapper>
                <div className="flex gap-20 flex-col  mx-3 lg:flex-row justify-center">
                    <div>
                        <TitleTwoXl>Parts & Item</TitleTwoXl>
                        <p>
                            Selain Menyediakan Jasa Kami Juga Menyediakan Parts
                            Untuk Berbagai Macam Barang Elektronik
                        </p>
                        <div className=" mt-4 flex lg:gap-2 flex-col lg:flex-row lg:flex-wrap overflow-hidden  ">
                            {PartsMenus.map((data, key) => (
                                <div key={key} className=" h-8 p-2 flex items-center gap-4 lg:w-[45%]">
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
                            <Link className="bg-blueSecondary shadow-lg w-fit py-3 px-4 my-4 rounded-md font-medium text-whiteMain ">
                                Kunjungi Toko
                            </Link>
                        </div>
                    </div>
                    <img
                        className="w-96 h-80 hidden lg:block rounded-lg object-cover"
                        src={"/parts/parts-main.png"}
                    />
                </div>
            </BigMxWrapper>
        </section>
    );
};
