import { TitleTwoXl } from "@/Components/TitleTwoXl";
import { EmailSupportLink } from "@/Components/links/EmailSupportLink";
import { FacebookLink } from "@/Components/links/FacebookLink";
import { InstagramLink } from "@/Components/links/InstagramLink";
import { LocationLink } from "@/Components/links/LocationLink";
import { TwiterLink } from "@/Components/links/TwiterLink";
import { BigMxWrapper } from "@/Layouts/wrapper/BigMxWrapper";
import React from "react";

export const FooterUmum = () => {
    return (
        <footer className="bg-blackThird text-whiteMain h-fit">
            <BigMxWrapper className={"py-6 flex flex-col xl:flex-row gap-6 justify-evenly px-4"}>
                <div  >
                    <TitleTwoXl className={'text-center'} >Daftar Service</TitleTwoXl>
                    <ul className="flex flex-col items-center gap-1 mt-4">
                        <li>Perbaikan Komputer & laptop</li>
                        <li>Perbaikan Smartphone</li>
                        <li>Instalasi AC</li>
                        <li>Perbaikan Hardware</li>
                        <li>Instalasi Software</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <TitleTwoXl>Service Sir</TitleTwoXl>
                    <p className="w-60 text-center">
                        layanan elektronik terkemuka yang siap memenuhi
                        kebutuhan pelanggan.
                    </p>
                    <>
                        <div className="mx-2 flex flex-col gap-2 justify-between items-center">
                            <div className="flex flex-col gap-1 items-center mt-4 mb-2">
                                <LocationLink textColor="text-whiteMain" />
                                <EmailSupportLink textColor="text-whiteMain" />
                            </div>
                            <div className="flex flex-row gap-3 mt-1 items-center">
                                <FacebookLink />
                                <InstagramLink />
                                <TwiterLink />
                            </div>
                        </div>
                    </>
                </div>
                <div>
                    <TitleTwoXl className={'text-center'} >Jam Buka Toko</TitleTwoXl>
                    <ul className="flex flex-col items-center gap-1 mt-4">
                        <li>Senin </li>
                        <li>Perbaikan Smartphone</li>
                        <li>Instalasi AC</li>
                        <li>Perbaikan Hardware</li>
                        <li>Instalasi Software</li>
                    </ul>
                </div>
            </BigMxWrapper>
        </footer>
    );
};
