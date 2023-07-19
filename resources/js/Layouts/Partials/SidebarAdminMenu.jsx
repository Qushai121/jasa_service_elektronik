import NavLink from "@/Components/NavLink";
import React from "react";

const menus = [
    { link: "dashboard", keterangan: "Dashboard" },
    {
        link: "profile.edit",
        keterangan: "Profile",
    },
    {
        link: "customer.index",
        keterangan: "List Customer",
    },
    {
        link: "barangservice.index",
        keterangan: "List Barang Service",
    },
    {
        link: "userbarangservice.index",
        keterangan: "List Pekerjaan Saya",
    },
];

const SidebarAdminMenu = () => {
    return (
        <>
            {menus.map((menu, i) => {
                return (
                    <a
                        className={` ${
                            route().current(menu.link) &&
                            " shadow-blue-800 shadow-2xl border-b-2 hover:shadow-none duration-300 border-blue-800 "
                        } py-2 px-4 group hover:bg-blue-900 duration-100`}
                        key={i}
                        href={route(menu.link)}
                        active={route().current(menu.link)}
                    >
                        <p className="text-gray-200  ">
                            {menu.keterangan}
                        </p>
                    </a>
                );
            })}
        </>
    );
};

export default SidebarAdminMenu;
