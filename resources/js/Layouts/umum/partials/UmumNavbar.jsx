import { BigMxWrapper } from "@/Layouts/wrapper/BigMxWrapper";
import { Link } from "@inertiajs/react";
import React, { useState } from "react";

const NavMenus = [
    { route: "asdasd", keterangan: "Home" },
    { route: "asdasd", keterangan: "Cara Pemesan Service" },
    { route: "asdasd", keterangan: "Harga Parts & Item" },
    { route: "asdasd", keterangan: "Lokasi" },
    { route: "asdasd", keterangan: "Bantuan" },
    { route: "asdasd", keterangan: "Detail Kontak" },
];

export const UmumNavbar = ({ handleDrawer, drawer }) => {
    return (
        <nav className="lg:py-3 bg-whiteMain">
            <BigMxWrapper>
                <div className=" flex items-center py-4 lg:py-2 px-4">
                    <div className="text-2xl flex-[3] w-2 font-montserrat font-bold">
                        {/* logo */}
                        Service Sir
                    </div>
                    <div className="flex-auto hidden lg:flex gap-6">
                        <div className="flex items-center">
                            <svg
                                width="50"
                                height="50"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.7071 13.7071L20.3552 16.3552C20.7113 16.7113 20.7113 17.2887 20.3552 17.6448C18.43 19.57 15.3821 19.7866 13.204 18.153L11.6286 16.9714C9.88504 15.6638 8.33622 14.115 7.02857 12.3714L5.84701 10.796C4.21341 8.61788 4.43001 5.56999 6.35523 3.64477C6.71133 3.28867 7.28867 3.28867 7.64477 3.64477L10.2929 6.29289C10.6834 6.68342 10.6834 7.31658 10.2929 7.70711L9.27175 8.72825C9.10946 8.89054 9.06923 9.13846 9.17187 9.34373C10.3585 11.7171 12.2829 13.6415 14.6563 14.8281C14.8615 14.9308 15.1095 14.8905 15.2717 14.7283L16.2929 13.7071C16.6834 13.3166 17.3166 13.3166 17.7071 13.7071Z"
                                    stroke="#488cb9"
                                />
                            </svg>
                            <div>
                                <h1 className="text-2xl font-montserrat font-semibold ">
                                    Hubungi Kami
                                </h1>
                                <p className="font-montserrat font-light">
                                    +62 5898612731211
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center">
                                <svg
                                    width="50"
                                    height="50"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx="12"
                                        cy="13"
                                        r="7"
                                        stroke="#488cb9"
                                    />
                                    <path
                                        d="M5 5L3 7"
                                        stroke="#488cb9"
                                        stroke-linecap="round"
                                    />
                                    <path
                                        d="M19 5L21 7"
                                        stroke="#488cb9"
                                        stroke-linecap="round"
                                    />
                                    <path
                                        d="M9 11L11.8093 12.8729C11.9172 12.9448 12.0622 12.9223 12.1432 12.821L14 10.5"
                                        stroke="#488cb9"
                                        stroke-linecap="round"
                                    />
                                </svg>

                                <div>
                                    <h1 className="text-2xl font-montserrat font-semibold ">
                                        Waktu Buka
                                    </h1>
                                    <p className="font-montserrat font-light">
                                        Senin-sabtu: 08:00-18:00{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:hidden">
                        <button
                            onClick={() => {
                                handleDrawer();
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1.5em"
                                viewBox="0 0 448 512"
                            >
                                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <hr className="mb-3 h-1 hidden lg:block rounded-lg border-t-0 w-[90%] bg-blueMain opacity-100 dark:opacity-50" />
                <div
                    className={`${
                        !drawer ? "h-[0.1px] " : "h-[14.4rem]"
                    }   w-full duration-500 lg:h-fit lg:flex lg:gap-3 `}
                >
                    {NavMenus.map((data, key) => (
                        <div
                            key={key}
                            className={`${
                                !drawer && "opacity-0 lg:opacity-100  "
                            } duration-300 `}
                        >
                            <Link>
                                <div className="py-2 px-3 w-full bg-stone-200 font-sans font-light rounded-md hover:bg-blueMain duration-300 hover:text-whiteMain">
                                    <p className="mx-2">{data.keterangan}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </BigMxWrapper>
        </nav>
    );
};
