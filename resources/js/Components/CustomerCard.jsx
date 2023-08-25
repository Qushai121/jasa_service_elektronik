import React from "react";

export const CustomerCard = ({ customers }) => {
    return (
        <div className="px-4">
            <h3 className="font-bold text-lg">Pemilik Barang</h3>
            <div className="px-2 pb-1">{customers?.nama}</div>
            <div className="flex flex-col">
                <div className="bg-red-100 w-full my-1 h-[1px]"></div>
                <h3 className="font-bold text-lg">Kontak</h3>
                <div className="px-2 pb-1">
                    <p>Email : {customers?.email}</p>
                    <p>Nomor : {customers?.nomor_kontak}</p>
                </div>
                <div className="bg-red-100 w-full my-1 h-[1px]"></div>
                <h3 className="font-bold text-lg">Alamat</h3>
                <p>{customers?.alamat}</p>
                <div className="bg-red-100 w-full my-1 h-[1px]"></div>
                {customers?.barangservices ? (
                    <>
                        <h3 className="font-bold text-lg">
                            Jumlah Barang Diservice
                        </h3>
                        <div className="px-2 pb-1">
                            <p>{customers.barangservices.length}</p>
                        </div>
                    </>
                ):null
                }
            </div>
        </div>
    );
};
