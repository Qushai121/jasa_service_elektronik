import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import React, { useState } from "react";

export const AddHelperModal = ({datas,auth}) => {
    // console.log(datas);
    if(auth.user.role_id == 1) return <></>
    const [tutup,setTutup] = useState(false)
    const { data, setData, post, processing, errors, reset } = useForm({
        user_id: auth.user.id,
        barang_service_id: datas.pivot.barang_service_id,
    });

    

    function askHelp(e) {
        post(route("addHelper", datas.pivot.id));
    }
    return (
        <>
            <PrimaryButton
                className="btn btn-sm m-2"
                onClick={() => setTutup(!tutup)}
            >
                Bantu Pekerja !!
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
                        Konfirmasi Membantu Sebagai Helper
                    </h3>
                    <p className="py-4">Klik Bantu Untuk Konfirmasi Bantuan Anda </p>
                    <div className="modal-action">
                        <PrimaryButton
                            onClick={(e) => askHelp(e)}
                            className="btn btn-md"
                        >
                            Bantu
                        </PrimaryButton>
                    </div>
                </div>
            </Modal>
        </>
    );
};
