import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import React, { useState } from "react";

export const SelasaiPekerjaan = ({dataPekerjaUtama,auth}) => {
    if(dataPekerjaUtama.pivot.status == 'Selesai'){
       return <></>
    }
    const [tutup, setTutup] = useState(false);
    const{barang_service_id,id} = dataPekerjaUtama.pivot

    const { data, setData, post, processing, errors, reset } = useForm({

    });

    const handleSubmit = () => {
        post(route('selesaipekerjaan',id),{
            ...data
        })
    }

    return (
        <>
            <PrimaryButton
                className="btn btn-sm m-2"
                onClick={() => setTutup(!tutup)}
            >
                Selesai!!
            </PrimaryButton>
            <Modal show={tutup} onClose={() => setTutup(!tutup)}>
                <div className="modal-box bg-gray-800 text-gray-200 ">
                    <button
                        onClick={() => setTutup(!tutup)}
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    >
                        ✕
                    </button>
                    <h3 className="font-bold text-lg">
                        Konfirmasi Barang Sudah Selesai
                    </h3>
                    <p className="py-4">
                        Klik Selesai Untuk Konfirmasi Bahwa Barang Sudah
                        Dinyatakan Selesai Di service{" "}
                    </p>
                    <div className="modal-action">
                        <PrimaryButton
                            onClick={(e) => handleSubmit(e)}
                            className="btn btn-md"
                        >
                            Selesai
                        </PrimaryButton>
                    </div>
                </div>
            </Modal>
        </>
    );
};
