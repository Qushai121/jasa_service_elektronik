import React from "react";
import { UmumLayout } from "@/Layouts/umum/UmumLayout";
import { BigMxWrapper } from "@/Layouts/wrapper/BigMxWrapper";
import { BigetronMain } from "./sections/BigetronMain";
import KenapaKita from "./sections/KenapaKita";
import { TitleTwoXl } from "@/Components/TitleTwoXl";
import Divider from "@/Components/Divider";
import { ServiceTersedia } from "./sections/ServiceTersedia";
import { SelematDatang } from "./sections/SelematDatang";

const Index = () => {
    return (
        <UmumLayout>
            <BigetronMain />
            <SelematDatang/>
            <KenapaKita />
            <ServiceTersedia />
            <div className="h-[40vh]"></div>
        </UmumLayout>
    );
};

export default Index;
