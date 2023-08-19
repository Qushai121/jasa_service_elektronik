import { TitleTwoXl } from "@/Components/TitleTwoXl";
import { UmumLayout } from "@/Layouts/umum/UmumLayout";
import { BigMxWrapper } from "@/Layouts/wrapper/BigMxWrapper";
import React, { useState } from "react";
import { PilihCaraPemesanan } from "./section/PilihCaraPemesanan";
import { HeaderTitleUmum } from "@/Components/HeaderTitleUmum";
import { Head } from "@inertiajs/react";

const CaraPemesanan = () => {
    return (
        <UmumLayout className="text-black ">
            <Head>
  <title>Cara Pemesanan</title>
  <meta name="description" content="Your page description" />
</Head>
         <HeaderTitleUmum images={'images/hello-mrgeorge.jpg'} title={'Cara Pemesanan Service'} subTitle={'Customer Memilih Method Pemesanan yang lebih di sukai'} />
            <PilihCaraPemesanan />
        </UmumLayout>
    );
};

export default CaraPemesanan;
