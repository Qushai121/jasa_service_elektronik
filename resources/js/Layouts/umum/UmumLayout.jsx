import React, { useState } from "react";
import { UmumNavbar } from "./partials/UmumNavbar";
import { TopBar } from "./partials/TopBar";
import { FooterUmum } from "./partials/FooterUmum";

export const UmumLayout = ({ children }) => {
    const [drawer, setDrawer] = useState(false);

    const handleDrawer = () => {
        setDrawer(!drawer);
    };
    return (
        <div className="overflow-x-hidden h-full bg-whiteMain">
            <TopBar />
            <UmumNavbar handleDrawer={handleDrawer} drawer={drawer} />
            <main  >{children}</main>
            <FooterUmum/>
        </div>
    );
};
