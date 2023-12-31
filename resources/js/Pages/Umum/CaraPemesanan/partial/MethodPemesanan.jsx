import { TitleTwoXl } from "@/Components/TitleTwoXl";
import React from "react";

export const MethodPemesanan = ({ open, datas, method }) => {
    return (
        <div className={`${open ? "h-fit" : "hidden"} duration-300 pt-4 px-2 `}>
            <TitleTwoXl className={"text-lg"}>{method}</TitleTwoXl>
            <div className="my-7 flex flex-col gap-5  ">
                {datas.map((data, key) => (
                    <div key={key} className="flex gap-4 items-center my-3 ">
                        <div className="w-[20%] xl:w-[5%]">
                            <p className="bg-blackMain bg-opacity-80 text-whiteMain text-xl rounded-full text-center py-2 xl:py-5">
                                {++key}
                            </p>
                        </div>
                        <div>
                            <p className="text-xl font-semibold mb-2">
                                {data.judul}
                            </p>
                            <div className="mx-6 ">
                                {data.keterangan.map((data, key) => (
                                    <div key={key}>
                                        <p className="font-medium my-2">
                                            {data}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
