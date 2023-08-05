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
            <BigMxWrapper>
                <div className="flex gap-4">
                    <div className="flex flex-col gap-4 pt-9 px-2 items-center">
                        <div className="w-12 rounded">
                            <img src={"/storage/" + JenisService.icon} />
                        </div>
                        <div className="flex flex-col gap-4 mt-3 bg-stone-200 backdrop-blur-sm py-4 rounded-md w-full items-center">
                            <FacebookLink />
                            <TwiterLink />
                            <InstagramLink />
                        </div>
                    </div>
                    <div className="px-8  py-6">
                        <div>
                            <TitleTwoXl>{JenisService.judul}</TitleTwoXl>
                            <p>{JenisService.sub_judul}</p>
                            <div className="w-full rounded-md mb-8 mt-4">
                                <img
                                    src={
                                        "/storage/" +
                                        JenisService.background_foto
                                    }
                                />
                            </div>
                        </div>
                        <div className="pt-6">
                            <DangerouslySetInnerHTML data={JenisService.blog} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="w-full flex flex-col gap-6 py-10 ">
                            <div>
                                <TitleTwoXl>Jenis Service Lainnya</TitleTwoXl>
                            </div>
                            {otherJenisServices.map((data, key) => (
                                <Link
                                    href={route("jenisServiceUmum.show", data.id)}
                                    key={key}
                                    className="bg-stone-200 rounded-md shadow-lg  overflow-hidden break-words w-[16vw]"
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
