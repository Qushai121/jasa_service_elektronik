import React from "react";
import { UmumLayout } from "@/Layouts/umum/UmumLayout";
import { BigMxWrapper } from "@/Layouts/wrapper/BigMxWrapper";
import { BigetronMain } from "./sections/BigetronMain";
import KenapaKita from "./sections/KenapaKita";
import { TitleTwoXl } from "@/Components/TitleTwoXl";
import Divider from "@/Components/Divider";
import { ServiceTersedia } from "./sections/ServiceTersedia";
import { SelematDatang } from "./sections/SelematDatang";
import { Parts } from "./sections/Parts";
import { Head } from "@inertiajs/react";

const content = "Kami menyediakan solusi jasa elektronik terpercaya untuk perbaikan, perawatan, dan instalasi berbagai perangkat elektronik. Ahli kami siap membantu Anda memulihkan kinerja optimal perangkat elektronik Anda dengan layanan berkualitas. Hubungi kami untuk pengalaman pelayanan elektronik terbaik."

const Home = ({JenisServices}) => {
    return (
        <UmumLayout>
            <Head>
  <title>Service Sir</title>
  <meta name="description" content={content} />
</Head>
            <BigetronMain JenisServices={JenisServices} />
            <SelematDatang />
            <KenapaKita />
            <ServiceTersedia />
           <Parts/>
        </UmumLayout>
    );
};

export default Home;
