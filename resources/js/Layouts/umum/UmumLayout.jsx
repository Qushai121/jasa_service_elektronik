import React, { useState } from "react";
import { UmumNavbar } from "./partials/UmumNavbar";
import { TopBar } from "./partials/TopBar";

export const UmumLayout = ({ children }) => {
    const [drawer,setDrawer] = useState(false)

    const handleDrawer = () => {
        setDrawer(!drawer)
    }
    return (
        <div>
            <TopBar />
            <UmumNavbar handleDrawer={handleDrawer} drawer={drawer} />
            <main>{children}</main>
        </div>
    );
};
