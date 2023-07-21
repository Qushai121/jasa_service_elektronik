import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import { Inertia } from "@inertiajs/inertia";
import { router, useForm } from "@inertiajs/react";
import React, { useState } from "react";

export default function LeaveJob({ dataHelper }) {
    const { pekerja_utama, barang_service_id, user_id, id } = dataHelper.pivot;
    if (pekerja_utama >= 1) return <></>;

    const [tutup, setTutup] = useState(false);

    // console.log(dataHelper.pivot);
    const { data, setData, post, processing, errors, reset } = useForm({
        id: id,
        user_id: user_id,
        barang_service_id: barang_service_id,
        pekerja_utama: pekerja_utama,
    });

    function changePekerjaUtama(e) {
        router.post(
            route("leaveJob", id),
            {
                ...data,
            },{
                onSuccess:location.reload()
            }
           
        );
    }

    return (
        <>
            <PrimaryButton
                className="btn btn-sm m-2"
                onClick={() => setTutup(!tutup)}
            >
                Tinggalkan Pekerjaan
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

                    <div className="modal-action">
                        <PrimaryButton
                            onClick={(e) => changePekerjaUtama(e)}
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
