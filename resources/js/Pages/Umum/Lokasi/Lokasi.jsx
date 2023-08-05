import { HeaderTitleUmum } from "@/Components/HeaderTitleUmum";
import { TitleTwoXl } from "@/Components/TitleTwoXl";
import { LocationLink } from "@/Components/links/LocationLink";
import { UmumLayout } from "@/Layouts/umum/UmumLayout";
import { BigMxWrapper } from "@/Layouts/wrapper/BigMxWrapper";
import React from "react";

const Lokasi = () => {
    return (
        <UmumLayout>
        <HeaderTitleUmum images={'images/bg-lokasi.jpg'} title={'Lokasi Warehouse'} subTitle={' google map dari warehouse dan bentuk fisiknya'} />
            <BigMxWrapper>
                <div className="flex justify-between py-10 ">
                    <div className="  w-[30vw] py-4 px-3 flex flex-col justify-evenly gap-5 items-center">
                        <img
                            className=" object-cover"
                            src={"/images/warehouse.png"}
                        />
                        <TitleTwoXl>Warehouse</TitleTwoXl>
                    </div>
                    <div className="  w-[30vw] py-4 px-3 flex flex-col justify-evenly gap-5 items-center">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507612.4104045192!2d106.25886424999999!3d-6.3002189999999905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1d762e95ae1%3A0xb96624945cac9ef2!2sWaduh!5e0!3m2!1sid!2sid!4v1690859775242!5m2!1sid!2sid"
                            width="600"
                            height="450"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <TitleTwoXl>Kunjungi Lokasi Kami</TitleTwoXl>
                        <LocationLink/>
                    </div>
                </div>
            </BigMxWrapper>
        </UmumLayout>
    );
};

export default Lokasi;