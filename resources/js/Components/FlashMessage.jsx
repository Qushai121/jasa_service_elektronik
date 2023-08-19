import React, { useEffect, useState } from "react";

export const FlashMessage = ({ message }) => {
    if(!message) return <></>
    const [open, setOpen] = useState(false);
    const [wrapper, setOpenWrapper] = useState(false);

    useEffect(() => {
        setOpen(false);
        setOpenWrapper(false);
    }, [message]);
    
    return (
        <div
            className={`${
                wrapper ? "h-0" : "h-10"
            } duration-300  overflow-hidden`}
        >
            <div
                className={`${
                    open ? " translate-y-11" : " translate-y-0"
                } bg-white py-2 px-4 flex h-10  duration-300 rounded-md mx-4 justify-between text-red-500`}
            >
                <p>{message}</p>
                <button
                    onClick={() => {
                        setOpen(!open);
                        setTimeout(() => {
                            setOpenWrapper(true);
                        }, 350);
                    }}
                >
                    X
                </button>
            </div>
        </div>
    );
};
