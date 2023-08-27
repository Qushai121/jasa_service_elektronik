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
import LeaveJob from "./Partials/LeaveJob";
import { Disclosure } from "@headlessui/react";
import { Inertia } from "@inertiajs/inertia";
import { SelasaiPekerjaan } from "./Partials/SelasaiPekerjaan";
import { HeaderStatus } from "@/Components/HeaderStatus";
import { Role } from "@/lib/role";

const DetailUserBarangService = ({
    userBarangServices,
    pekerjaUtama,
    helper,
    auth,
}) => {
    const [tutup, setTutup] = useState(false);

    // kalo data ini terisi berarrti orang yang login adalah helper
    const [checkIfIamHelper, setCheckIfIamHelper] = useState();

    function onlyOneHelp() {
        for (let i = 0; i < helper.length; i++) {
            const element = helper[i];
            if (element.id == auth.user.id) {
                setCheckIfIamHelper(helper[i]);
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
            <HeaderStatus status={pekerjaUtama.pivot.status} />
            <div className="py-12 h-screen">
                <div className="max-w-7xl mx-auto sm:px-6 xl:px-8 space-y-6">
                    <div className="flex xl:flex-row gap-4 flex-col">
                        <div className="text-gray-100 p-4 sm:p-8 xl:w-[40%] w-full overflow-x-auto bg-gray-800 shadow sm:rounded-lg">
                            <CustomerCard
                                customers={userBarangServices?.customers}
                            />
                            <div className="mx-3 ">
                                {pekerjaUtama.id == auth.user.id &&
                                    pekerjaUtama.pivot.status != "Selesai" ?
                                     (
                                        <>
                                        { pekerjaUtama.pivot.status != "Perlu Bantuan" ?(

                                            
                                            <PrimaryButton
                                            className="btn btn-sm m-2"
                                            onClick={() => setTutup(!tutup)}
                                            >
                                                Minta Bantuan
                                            </PrimaryButton>
                                            ):null
                                            }
                                            <GivePekerjaUtamaModal
                                                userBarangServices={
                                                    userBarangServices
                                                }
                                                dataHelper={helper}
                                                dataPekerjaUtama={pekerjaUtama}
                                            />
                                            {
                                                <SelasaiPekerjaan
                                                    auth={auth}
                                                    dataPekerjaUtama={
                                                        pekerjaUtama
                                                    }
                                                />
                                            }
                                        </>
                                    ):null
                                }
                                {/* khusu helper kalo mau tinggalkan pekerjaan */}
                                {/* dan kalo pekerja utama mau tinggal kan pekerjan harus pindahin dulu status pekerja utama ke helper  */}
                                {checkIfIamHelper ? (
                                    <LeaveJob dataHelper={checkIfIamHelper} />
                                ):null}

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
                                {
                                    console.log(pekerjaUtama.pivot.status != "Selesai")
                                }
                                {pekerjaUtama.pivot.status != "Selesai" &&
                                pekerjaUtama.id != auth.user.id ? (
                                    <>
                                        <div>
                                            <AddHelperModal
                                            dataHelper={checkIfIamHelper}
                                                datas={pekerjaUtama}
                                                auth={auth}
                                            />
                                        </div>
                                    </>
                                ) : null}
                                {pekerjaUtama.id == auth.user.id &&
                                    pekerjaUtama.pivot.status != "Selesai" ? (
                                        <>
                                            <div className="bg-red-100 w-full my-1 h-[1px]"></div>
                                            <Disclosure>
                                                <Disclosure.Button className="py-2 px-3 rounded-sm flex gap-2">
                                                    <div>
                                                        Cara Keluar Pekerjaan
                                                        Ini
                                                    </div>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        className="w-6 h-6"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="text-gray-500">
                                                    <p>
                                                        Jika Ingin Meninggalkan
                                                        Pekerjaan Berikan Posisi
                                                        pekerja utama kepada
                                                        helper dahulu, atau
                                                        Dengan cara Batalkan
                                                        pekerjaan Ini dengan
                                                        begitu akan menghapus
                                                        semua yang berkaitan
                                                        dengan barang ini
                                                    </p>
                                                </Disclosure.Panel>
                                            </Disclosure>
                                        </>
                                    ):null}
                            </div>
                        </div>

                        <div className="w-full flex flex-wrap gap-4 ">
                            <div className="w-full xl:w-fit">
                                <div className="p-4 sm:p-8 bg-gray-800 h-fit gap-2 shadow w-full overflow-x-auto sm:rounded-lg ">
                                    <PekerjaForm
                                        pekerja={pekerjaUtama}
                                        pekerjaPertama={true}
                                    />
                                </div>
                            </div>
                            {helper?.map((pekerjaData, key) => (
                                <div key={key} className="w-full xl:w-fit">
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
