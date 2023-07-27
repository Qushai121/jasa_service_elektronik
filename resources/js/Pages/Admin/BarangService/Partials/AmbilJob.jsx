import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, usePage } from "@inertiajs/react";
import React from "react";

export const AmbilJob = ({ auth, barangId }) => {
    if (auth.role_id == 1) {
        return <></>;
    }
    

    const { data, setData, post, processing, errors } = useForm({
        user_id: auth.id,
        barang_service_id: barangId,
    });
    
    function TakeJob() {
        post(route("userbarangservice.store"));
    }
    
    return (
        <>
            <PrimaryButton onClick={() => TakeJob()}>Ambil Job</PrimaryButton>
        </>
    );
};
