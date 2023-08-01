import { BigMxWrapper } from "@/Layouts/wrapper/BigMxWrapper";
import React from "react";
import { TitleTwoXl } from "./TitleTwoXl";
import Divider from "./Divider";
import { Link } from "@inertiajs/react";

export const HeaderTitleUmum = ({ title, subTitle,images }) => {
    return (
        <div className="bg-stone-200 py-10"  style={{
            backgroundImage: `url(${images})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "rgba(0,0, 0, 0.5)",
            backgroundBlendMode: "darken",
        
        }}>
            <BigMxWrapper>
                <BigMxWrapper className={"flex flex-col gap-4 justify-between lg:flex-row text-whiteMain"}>
                    <div>
                        <TitleTwoXl>
                            {title}
                        </TitleTwoXl>
                        <p className="font-light">{subTitle}</p>
                        <Divider
                            width="w-[15%]"
                            color="bg-blueSecondary"
                            className="h-2 -mt-[0.1px]"
                        />
                    </div>
                    <div className="flex gap-1 justify-end lg:justify-start items-center">
                        <Link href="/home">home /</Link>
                        <Link href={`${window.location.href}`}> {window.location.href.split('/')[3]}</Link>
                    </div>
                </BigMxWrapper>
            </BigMxWrapper>
        </div>
    );
};
