import React, { useState } from "react";

export const HeaderStatus = ({ status }) => {
    switch (status) {
        case "DI Proses":
          return <HeaderStatusView bgColor={"bg-info"} status={status} />;
        case "Perlu Bantuan":
          return <HeaderStatusView bgColor={"bg-warning"} status={status} />;

        case "Gagal Diperbaiki":
          return <HeaderStatusView bgColor={"bg-error"} status={status} />;

        case "Selesai":
            return <HeaderStatusView bgColor={"bg-success"} status={status} />;

        case "Helper":
            return <HeaderStatusView bgColor={"bg-info"} status={status} />;
            
            default:
              return <HeaderStatusView bgColor={"bg-info"} status={status} />;
    }
};

const HeaderStatusView = ({ bgColor,status }) => {
    return (
        <div className="h-full w-full flex justify-center items-center ">
            <div
                className={`${bgColor} py-1 rounded-md w-full overflow-hidden`}
            >
                <div className="text-white text-[30px] text-center gap-[80vw] flex animate-translateX-status ">
                   <p className='whitespace-nowrap'>{status}</p>
                   <p className='whitespace-nowrap'>{status}</p>
                </div>
            </div>
        </div>
    );
};
