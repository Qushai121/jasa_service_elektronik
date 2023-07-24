import { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import NavbarAdmin from "./NavbarAdmin";
import SidebarAdminMenu from "./Partials/SidebarAdminMenu";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Header from "@/Pages/Admin/BarangService/Partials/Header";

export default function AuthenticatedLayout({ user, children, headers }) {
    const [getsidebar, setSidebar] = useState(false);
    const openSidebar = () => {
        setSidebar(!getsidebar);
    };
    return (
        <div className="min-h-screen bg-gray-900  md:w-full w-fit ">
            <div className="drawer lg:drawer-open">
                <input
                    id="my-drawer-2"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content h-[100vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-100">
                    <NavbarAdmin openSidebar={openSidebar} />
                    {headers?.open && <Header title={headers?.title} description={headers?.description} />}
                    <main className="h-[100vh] lg:w-full">
                        <div className="mx-6 my-4">{children}</div>
                    </main>
                </div>
                <div>
                    <div
                        className={`${
                            getsidebar ? "w-0" : "w-40 lg:w-80"
                        } duration-300 bg-gray-800 min-h-screen py-8 `}
                    >
                        <ul
                            className={`${
                                getsidebar ? "hidden" : "flex"
                            } flex-col gap-2`}
                        >
                            <ApplicationLogo className="block h-20 py-1 w-auto fill-current text-gray-800 dark:text-gray-200 animate-spin-slow" />
                            <span className="h-4"></span>
                            <SidebarAdminMenu />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
