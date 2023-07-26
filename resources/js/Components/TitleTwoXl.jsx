import React from "react";

export const TitleTwoXl = ({ children, className }) => {
    return (
        <h1 className={`font-montserrat font-semibold text-2xl ${className} `}>{children}</h1>
    );
};
