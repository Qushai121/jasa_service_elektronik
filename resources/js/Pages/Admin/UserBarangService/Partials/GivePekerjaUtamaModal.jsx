import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import { router, useForm } from "@inertiajs/react";
import React, { useState } from "react";

export default function GivePekerjaUtamaModal({
    userBarangServices,
    dataHelper,
    dataPekerjaUtama,
}) {
    const [tutup, setTutup] = useState(false);
    const [helperChosenOne, setHelperChosenOne] = useState("");

    const { data, setData, post, processing, errors, reset } = useForm({
        id: dataPekerjaUtama.pivot.id,
        user_id: dataPekerjaUtama.pivot.user_id,
        barang_service_id: userBarangServices.id,
        helper_id: null,
    });

    const helperChosenOneFn = (e) => {
        setData({...data, 'helper_id':e.target.value});

    };

    // console.log();
    function givePekerjaanUtama(e) {
        if(data.helper_id){
            router.post(route("givePekerjaanUtama", dataPekerjaUtama.pivot.id), {
                _method: "put",
                ...data,
            },{
                onSuccess:location.reload()
            });
        }
            
    }
    
    // ]=
    
    


    return (
        <>
            <PrimaryButton
                className="btn btn-sm m-2"
                onClick={() => setTutup(!tutup)}
            >
            Ubah Pekerja Utama
                
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
                        Form Pelepasan Tugas Pekerja Utama Ke Helper
                    </h3>
                    <p className="py-4">
                        Pilih helper yang mau dijadikan pekerja utama
                    </p>
                    <select
                        onChange={helperChosenOneFn}
                        className="select bg-gray-800 select-bordered w-full max-w-xs"
                    >
                       <option  defaultChecked >Pilih Helper :</option>
                        {dataHelper.map((data, key) =>{
                             return(
                            <option key={key} value={data.id}>
                                {data.name}
                            </option>
                        )})}
                    </select>
                    <div className="modal-action">
                        <PrimaryButton
                            onClick={(e) => givePekerjaanUtama(e)}
                            className="btn btn-md"
                        >
                            Lanjut
                        </PrimaryButton>
                    </div>
                </div>
            </Modal>
        </>
    );
}
