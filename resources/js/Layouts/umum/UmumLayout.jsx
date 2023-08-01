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
        <div className="overflow-x-hidden font-montserrat h-fit scrollbar-none bg-whiteMain ">
            <TopBar />
            <UmumNavbar handleDrawer={handleDrawer} drawer={drawer}  />
            <main className="h-fit">{children}</main>
            <FooterUmum />
            <div className="bg-blackMain text-whiteMain text-center py-2 font-light font-montserrat">
                &copy; uhuy.ltd
            </div>
        </div>
    );
};
