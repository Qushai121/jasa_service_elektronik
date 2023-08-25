import NavLink from "@/Components/NavLink";
import { Role } from "@/lib/role";
import { usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

const menus = [
    { link: "dashboard", keterangan: "Dashboard", role: [Role.admin, Role.dataEntry, Role.pekerja] },
    {
        link: "profile.edit",
        keterangan: "Profile",
        role: [Role.userBiasa, Role.admin, Role.dataEntry, Role.pekerja],
    },
    {
        link: "JenisService.index",
        keterangan: "Jenis Service",
        role: [Role.admin],
    },
    {
        link: "customer.index",
        keterangan: "List Customer",
        role: [Role.admin, Role.dataEntry],
    },
    {
        link: "barangservice.index",
        keterangan: "List Barang Service",
        role: [Role.admin, Role.dataEntry, Role.pekerja],
    },
    {
        link: "userbarangservice.index",
        keterangan: "List Pekerjaan Saya",
        role: [Role.admin, Role.dataEntry, Role.pekerja],
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
