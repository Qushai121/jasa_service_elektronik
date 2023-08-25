import DangerouslySetInnerHTML from "@/Components/DangerouslySetInnerHTML";
import { TitleTwoXl } from "@/Components/TitleTwoXl";
import { FacebookLink } from "@/Components/links/FacebookLink";
import { InstagramLink } from "@/Components/links/InstagramLink";
import { TwiterLink } from "@/Components/links/TwiterLink";
import { UmumLayout } from "@/Layouts/umum/UmumLayout";
import { BigMxWrapper } from "@/Layouts/wrapper/BigMxWrapper";
import { Link } from "@inertiajs/react";
import React from "react";

const DetailJenisService = ({ JenisService, otherJenisServices }) => {
    return (
        <UmumLayout>
            <BigMxWrapper >
                <div className="flex flex-col h-full xl:flex-row gap-10 mx-4 justify-between">
                    <div className="flex xl:flex-col gap-4 xl:pt-9 px-4 w-15 items-center bg-stone-200">
                        <div className="w-12 rounded mx-auto flex justify-center">
                            <img src={"/storage/" + JenisService.icon} />
                        </div>
                        <div className="flex xl:flex-col gap-4 xl:mt-3 bg-stone-200 backdrop-blur-sm py-4 rounded-md w-full items-center justify-end xl:px-4">
                            <FacebookLink />
                            <TwiterLink />
                            <InstagramLink />
                        </div>
                    </div>
                    <div className="flex-initial xl:w-[80vw] px-10 break-words py-6 border-x-2 border-stone-200 shadow-inner">
                        <div>
                            <TitleTwoXl>{JenisService.judul}</TitleTwoXl>
                            <p>{JenisService.sub_judul}</p>
                            <div className="rounded-md mb-8 mt-4">
                                <img
                                    className="object-fill w-[40vw]"
                                    src={
                                        "/storage/" +
                                        JenisService.background_foto
                                    }
                                />
                            </div>
                            <div className="pt-6">
                                <DangerouslySetInnerHTML
                                    data={JenisService.blog}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 relative py-8">
                        <div className="flex flex-col gap-6 py-10 ">
                            <div>
                                <TitleTwoXl>Jenis Service Lainnya</TitleTwoXl>
                            </div>
                            {otherJenisServices.map((data, key) => (
                                <Link
                                    href={route(
                                        "jenisServiceUmum.show",
                                        data.id
                                    )}
                                    key={key}
                                    className="bg-stone-200 rounded-md shadow-lg overflow-hidden break-words xl:w-[16vw]"
                                >
                                    <div className="flex gap-5 py-2">
                                        <div className="w-24 h-14 ml-4 flex rounded-md">
                                            <img
                                                src={
                                                    "/storage/" +
                                                    data.background_foto
                                                }
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">
                                                {data.judul}
                                            </h4>
                                            <p className="text-sm">
                                                Agustus 11, 2030
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div>
                            <TitleTwoXl>Service Sekarang !!</TitleTwoXl>
                            <Link className="btn bg-stone-200 w-full shadow-lg mt-2">
                                Service
                            </Link>
                        </div>
                        <div>
                            <TitleTwoXl>Bantuan</TitleTwoXl>
                            <Link className="btn bg-stone-200 w-full shadow-lg mt-2 ">
                                Bantuan
                            </Link>
                        </div>
                    </div>
                </div>
            </BigMxWrapper>
        </UmumLayout>
    );
};

export default DetailJenisService;
