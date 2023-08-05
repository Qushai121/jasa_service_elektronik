import Divider from "@/Components/Divider";
import { HeaderTitleUmum } from "@/Components/HeaderTitleUmum";
import { UmumLayout } from "@/Layouts/umum/UmumLayout";
import { BigMxWrapper } from "@/Layouts/wrapper/BigMxWrapper";
import React from "react";
import { Filter } from "./partials/Filter";
import { Link } from "@inertiajs/react";

const JenisService = ({ JenisServices }) => {
    console.log(JenisServices);
    return (
        <UmumLayout>
            <HeaderTitleUmum
                images={"images/hello-mrgeorge.jpg"}
                title={"Jenis Jenis Service Yang Kami Sediakan"}
                subTitle={
                    "Silahkan Melihat Apa Saja Barang Yang Bisa Kami Service"
                }
            />
            <div className="bg-stone-200">
                <div className="mx-36">
                    <div className="flex flex-row gap-10 mx h-[100vh] ">
                        <Filter JenisServices={JenisServices} />
                        <div className=" h-full flex  py-5 flex-wrap gap-2 text-whiteMain">
                            {JenisServices?.data?.map((data, key) => (
                                <Link
                                href={route('jenisServiceUmum.show',data.id)}
                                    key={key}
                                    className="w-[27%] bg-whiteMain text-blackMain py-2 shadow-lg hover:shadow-none duration-300"
                                >
                                    <div className="my-4 mx-5">
                                        <p className="text-sm ">Laptop</p>
                                    </div>
                                    <div className="h-[54%] ">
                                        <img
                                            src={
                                                "/storage/" +
                                                data.background_foto
                                            }
                                            width={"1000"}
                                            height={"300"}
                                        />
                                    </div>
                                    <div className="px-4 py-3">
                                        <h5 className="text-bold break-words text-lg line-clamp-1">
                                            {data.judul}
                                        </h5>
                                        <h4 className="mt-8 h-full break-words text-sm line-clamp-3">
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
