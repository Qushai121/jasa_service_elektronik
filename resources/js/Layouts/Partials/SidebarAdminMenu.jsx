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
];

const SidebarAdminMenu = () => {
    return (
        <>
            {menus.map((menu, i) => {
                return (
                    <li key={i}>
                        <NavLink
                            href={route(menu.link)}
                            active={route().current(menu.link)}
                        >
                            {menu.keterangan}
                        </NavLink>
                    </li>
                );
            })}
        </>
    );
};

export default SidebarAdminMenu;
