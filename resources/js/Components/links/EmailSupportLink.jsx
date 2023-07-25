import React from "react";

export const EmailSupportLink = () => {
    return (
        <div className="flex items-center gap-1" >
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    x="4"
                    y="6"
                    width="16"
                    height="12"
                    rx="2"
                    stroke="#488cb9"
                    stroke-width="2"
                />
                <path
                    d="M4 9L11.1056 12.5528C11.6686 12.8343 12.3314 12.8343 12.8944 12.5528L20 9"
                    stroke="#488cb9"
                    stroke-width="2"
                />
            </svg>
            <span className="font-sans font-semibold text-sm text-blackMain">support@servicesir.com</span>
        </div>
    );
};