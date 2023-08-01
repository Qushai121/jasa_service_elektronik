import React from "react";
import { TitleTwoXl } from "../TitleTwoXl";

export const PagesFullMsg = ({msg}) => {
    return (
        <div className="h-[50vh]">
            <div className="flex justify-center items-center h-full">
                <TitleTwoXl>{msg}</TitleTwoXl>
            </div>
        </div>
    );
};
