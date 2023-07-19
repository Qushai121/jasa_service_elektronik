import React from "react";

export const BadgeStatus = ({ status }) => {
    //     case BELUMDIPROSES = 'Belum DiProses';
    //     case DIPROSES = 'DI Proses';
    //  // ============================
    //     case BANTUAN = 'Perlu Bantuan';
    //     case GAGAL = 'Gagal Diperbaiki';
    //     case SELESAI = 'Selesai';
    switch (status) {
        case "DI Proses":
            return (
                <p className="badge badge-info whitespace-nowrap">{status}</p>
            );
        case "Perlu Bantuan":
            return (
                <p className="badge badge-warning whitespace-nowrap">
                    {status}
                </p>
            );
        case "Gagal Diperbaiki":
            return (
                <p className="badge badge-error whitespace-nowrap">{status}</p>
            );
        case "Selesai":
            return (
                <p className="badge badge-success whitespace-nowrap">{status}</p>
            );
        case "Helper":
            return (
                <p className="badge badge-info whitespace-nowrap">Di Gantiakan Helper</p>
            );
        default:
            return (
                <p className="badge badge-info whitespace-nowrap">
                    {status}
                </p>
            );
    }
};
