import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import { Role } from "@/lib/role";
import { useForm } from "@inertiajs/react";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export const AddHelperModal = ({datas,auth,dataHelper}) => {
    if(auth.user.role_id == Role.userBiasa) return <></>
    const [tutup,setTutup] = useState(false)
    
    const { data, setData, post, processing, errors, reset } = useForm({
        user_id: auth.user.id,
        barang_service_id: datas.pivot.barang_service_id,
    });

    
    function helpThisGuy(e) {
        if(!dataHelper){
            post(route("addHelper", datas.pivot.id),{
                onSuccess:location.reload()
            });
        }
    }
    return (
        <>
            <PrimaryButton
                className="btn btn-sm m-2"
                onClick={() => setTutup(!tutup)}
            >
                Bantu Pekerja !!
            </PrimaryButton>
            <ToastContainer/>
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
                    {
                        dataHelper ? 
                        <p className="py-4 text-red-400">
                            Kamu Sudah Menjadi Helper
                        </p>
                        :
                    <p className="py-4">Klik Bantu Untuk Konfirmasi Bantuan Anda </p>
                    }
                    <div className="modal-action">
                        <PrimaryButton
                            disabled={dataHelper}
                            onClick={(e) => helpThisGuy(e)}
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
