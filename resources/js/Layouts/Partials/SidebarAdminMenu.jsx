import NavLink from "@/Components/NavLink";
import { usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

const menus = [
    { link: "dashboard", keterangan: "Dashboard", role: [2, 3, 4] },
    {
        link: "profile.edit",
        keterangan: "Profile",
        role: [1, 2, 3, 4],
    },
    {
        link: "JenisService.index",
        keterangan: "Jenis Service",
        role: [2],
    },
    {
        link: "customer.index",
        keterangan: "List Customer",
        role: [2, 3],
    },
    {
        link: "barangservice.index",
        keterangan: "List Barang Service",
        role: [2, 3, 4],
    },
    {
        link: "userbarangservice.index",
        keterangan: "List Pekerjaan Saya",
        role: [2, 3, 4],
    },
];

const SidebarAdminMenu = () => {
    const [user, setUser] = useState();
    const data = usePage().props.auth.user;
    useEffect(() => {
        setUser(data);
    }, []);
    return (
        <>
            {menus
                .filter((menu) => {
                    return menu?.role?.includes(user?.role_id);
                })
                .map((menu, i) => {
                    return (
                        <a
                            className={` ${
                                route().current(menu.link)
                                    ? " shadow-blue-800 shadow-2xl border-b-2 hover:shadow-none duration-300 border-blue-800 "
                                    : ""
                            } py-2 px-4 group hover:bg-blue-900 duration-100`}
                            key={i}
                            href={route(menu.link)}
                        >
                            <p className="text-gray-200  ">{menu.keterangan}</p>
                        </a>
                    );
                })}
        </>
    );
};

export default SidebarAdminMenu;
