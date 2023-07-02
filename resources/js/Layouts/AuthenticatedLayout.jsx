import { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import NavbarAdmin from "./NavbarAdmin";
import SidebarAdminMenu from "./Partials/SidebarAdminMenu";

export default function AuthenticatedLayout({ user, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
        // console.log(usePage().props.auth.user);
    const [getsidebar, setSidebar] = useState(true);

    const openSidebar = () => {
        setSidebar(!getsidebar);
    };

    return (
        <div className="min-h-screen bg-gray-900">
            <div className="drawer lg:drawer-open">
                <input
                    id="my-drawer-2"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content">
                    <NavbarAdmin openSidebar={openSidebar} />
                    <main>{children}</main>
                </div>
                <div className="drawer-side ">
                    <label
                        htmlFor="my-drawer-2"
                        className="drawer-overlay"
                    ></label>
                    <div
                        className={
                            "menu w-80  bg-gray-800 h-full"
                        }
                    >
                        <ul className="flex flex-col mx-2 gap-4 " >
                            <SidebarAdminMenu/>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
