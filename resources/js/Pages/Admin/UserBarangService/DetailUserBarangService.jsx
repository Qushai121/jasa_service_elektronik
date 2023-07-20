import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useEffect, useState } from "react";
import { PekerjaForm } from "./Partials/PekerjaForm";
import { CustomerCard } from "@/Components/CustomerCard";
import { BarangServiceForm } from "./Partials/BarangServiceForm";
import PrimaryButton from "@/Components/PrimaryButton";
import Modal from "@/Components/Modal";
import { router, useForm } from "@inertiajs/react";
import { AddHelperModal } from "./Partials/AddHelperModal";
import GivePekerjaUtamaModal from "./Partials/GivePekerjaUtamaModal";

const DetailUserBarangService = ({
    userBarangServices,
    pekerjaUtama,
    helper,
    auth,
}) => {
    const [tutup, setTutup] = useState(false);

    // console.log(helper);
    // console.log(pekerjaUtama);
    const [oneHelperHelpOnlyOnce, setOneHelperHelpOnlyOnce] = useState();

    function onlyOneHelp() {
        for (let i = 0; i < helper.length; i++) {
            const element = helper[i];
            if (element.id == auth.user.id) {
                setOneHelperHelpOnlyOnce(helper[i]);
            }
        }
    }

    useEffect(() => {
        onlyOneHelp();
    }, []);


    const { data, setData, post, processing, errors, reset } = useForm({
        user_id: pekerjaUtama.id,
        barang_service: pekerjaUtama.pivot.barang_service_id,
        askhelp: 1,
    });

    function askHelp(e) {
        router.post(route("askHelp", pekerjaUtama.pivot.id), {
            _method: "put",
            ...data,
        });
    }

    // askhelp
    return (
        <AuthenticatedLayout>
            <div className="py-12 w-[100vw] lg:w-full">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="flex lg:flex-row gap-4 flex-col">
                        <div className="text-gray-100 p-4 sm:p-8 lg:w-[40%] w-full overflow-x-auto bg-gray-800 shadow sm:rounded-lg">
                            <CustomerCard
                                customers={userBarangServices?.customers}
                            />
                            <div className="mx-3 ">
                                <h3 className="font-bold text-lg">
                                    Status Pengerjaan
                                </h3>
                                <div className="px-2 pb-1">
                                    <p className="bg-green-500 rounded-md p-2">
                                        {" "}
                                        {
                                            userBarangServices
                                                ?.customers_belong_to_many[0]
                                                .pivot.status
                                        }
                                    </p>
                                </div>
                                {pekerjaUtama.id == auth.user.id && (
                                    <>
                                        <PrimaryButton
                                            className="btn btn-sm m-2"
                                            onClick={() => setTutup(!tutup)}
                                        >
                                            Minta Bantuan
                                        </PrimaryButton>
                                        <GivePekerjaUtamaModal userBarangServices={userBarangServices} dataHelper={helper} dataPekerjaUtama={pekerjaUtama} />
                                    </>
                                )}
                                <Modal
                                    show={tutup}
                                    onClose={() => setTutup(!tutup)}
                                >
                                    <div className="modal-box bg-gray-800 text-gray-200 ">
                                        <button
                                            onClick={() => setTutup(!tutup)}
                                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                        >
                                            ✕
                                        </button>
                                        <h3 className="font-bold text-lg">
                                            Konfirmasi Meminta Helper
                                        </h3>
                                        <p className="py-4">
                                            Klik Lanjut Untuk Konfirmasi Bantuan
                                        </p>
                                        <div className="modal-action">
                                            <PrimaryButton
                                                onClick={(e) => askHelp(e)}
                                                className="btn btn-md"
                                            >
                                                Lanjut
                                            </PrimaryButton>
                                        </div>
                                    </div>
                                </Modal>
                                {helper.map((data, key) => {
                                    return pekerjaUtama.pivot.pekerja_utama ==
                                        1 &&
                                        !oneHelperHelpOnlyOnce &&
                                        pekerjaUtama.id != auth.user.id ? (
                                        <>
                                            <div key={key}>
                                                <AddHelperModal
                                                    datas={pekerjaUtama}
                                                    auth={auth}
                                                />
                                            </div>
                                        </>
                                    ) : (
                                        <></>
                                    );
                                })}
                                {/* {pekerja.map((data, key) => {
                                    return(
                                    pekerja[0].pivot.status == "Perlu Bantuan" &&
                                    pekerja[0].id != auth.user.id && 
                                    data.pivot.user_id != auth.user.id ? (
                                        <AddHelperModal
                                            datas={datas}
                                            auth={auth}
                                        />
                                    ) : (
                                        <></>
                                    )
                                )})} */}

                                {/* {pekerja[0].pivot.status == "Perlu Bantuan" &&
                                pekerja[0].id != auth.user.id ? (
                                    <AddHelperModal datas={datas} auth={auth} />
                                ) : (
                                    <></>
                                )} */}
                                <div className="bg-red-100 w-full my-1 h-[1px]"></div>
                            </div>
                        </div>

                        <div className="w-full flex flex-wrap lg:gap-2 ">
                            <div className="w-full lg:w-fit">
                                <div className="p-4 sm:p-8 bg-gray-800 h-fit gap-2 shadow w-full overflow-x-auto sm:rounded-lg ">
                                    <PekerjaForm
                                        pekerja={pekerjaUtama}
                                        pekerjaPertama={true}
                                    />
                                </div>
                            </div>
                            {helper?.map((pekerjaData, key) => (
                                <div key={key} className="w-full lg:w-fit">
                                    <div className="p-4 sm:p-8 bg-gray-800 h-fit gap-2 shadow w-full overflow-x-auto sm:rounded-lg ">
                                        <PekerjaForm
                                            pekerja={pekerjaData}
                                            pekerjaPertama={false}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="p-4 sm:p-8 bg-gray-800 shadow sm:rounded-lg">
                        <BarangServiceForm
                            barangservices={userBarangServices}
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default DetailUserBarangService;
