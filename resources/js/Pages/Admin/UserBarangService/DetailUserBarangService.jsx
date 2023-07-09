import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import { PekerjaForm } from "./Partials/PekerjaForm";
import { CustomerCard } from "@/Components/CustomerCard";
import { BarangServiceForm } from "./Partials/BarangServiceForm";

const DetailUserBarangService = ({ userBarangServices, auth }) => {
    console.log(userBarangServices);
    return (
        <AuthenticatedLayout>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="flex lg:flex-row gap-4 flex-col">
                        <div className="text-gray-100 p-4 sm:p-8 lg:w-[40%] w-full overflow-x-auto bg-gray-800 shadow sm:rounded-lg">
                            <CustomerCard
                                customers={userBarangServices.customers}
                            />
                        </div>
                        <div className="w-full flex flex-wrap lg:gap-2 " >
                            {userBarangServices.customers_belong_to_many.map(
                                (pekerja, key) => (
                                    <div className="w-full lg:w-fit" >
                                        <div className="p-4 sm:p-8 bg-gray-800 h-fit gap-2 shadow w-full overflow-x-auto sm:rounded-lg ">
                                            <PekerjaForm
                                                pekerja={pekerja}
                                                key={key}
                                            />
                                           
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                    <div className="p-4 sm:p-8 bg-gray-800 shadow sm:rounded-lg">
                        {/* jaga jaga kalo ada error di map [0] */}

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
