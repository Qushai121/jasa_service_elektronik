import { TitleTwoXl } from "@/Components/TitleTwoXl";
import React, { useEffect, useState } from "react";
import { MethodPemesanan } from "../partial/MethodPemesanan";
import { BigMxWrapper } from "@/Layouts/wrapper/BigMxWrapper";


const OfflinePesanMenus = [
    
    {
        urutan: "1",
        judul: "Penjadwalan Kunjungan:",
        keterangan: [
            "a. Customer menghubungi toko melalui telepon atau datang langsung ke toko untuk membuat janji temu.",
            "b. Customer menyampaikan jenis perbaikan yang diperlukan dan informasi tentang barang yang akan diperbaiki.",
        ],
    },
    {
        urutan: "2",
        judul: "Konfirmasi Janji Temu:",
        keterangan: [
            "a. Toko mengkonfirmasi janji temu melalui telepon atau pesan teks.",
            "b. Toko menyediakan informasi tentang waktu, tanggal, dan tempat pertemuan.",
        ],
    },
    {
        urutan: "3",
        judul: "Kunjungan ke Toko:",
        keterangan: [
            " a. Customer datang ke toko sesuai dengan jadwal yang telah ditetapkan.",
            "b. Customer membawa barang yang akan diperbaiki dan informasi tentang masalah yang dialami.",
            <a href="ddd" className="text-blue-500 underline" >Klik Disini Untuk Lihat Alamat Toko</a>
        ],
    },
    {
        urutan: "4",
        judul: "Konsultasi dengan Teknisi:",
        keterangan: [
            "a. Customer berbicara dengan teknisi atau pihak yang bertanggung jawab tentang perbaikan yang diperlukan.",
            "b. Teknisi memberikan penjelasan mengenai masalah yang ada dan perkiraan biaya perbaikan.",
        ],
    },
    {
        urutan: "5",
        judul: "Estimasi Biaya dan Waktu:",
        keterangan: [
            "a. Setelah menganalisis masalah barang, teknisi memberikan estimasi biaya perbaikan kepada customer.",
            "b. Teknisi juga memberitahukan perkiraan waktu yang dibutuhkan untuk menyelesaikan perbaikan.",
            
        ],
    },
    {
        urutan: "6",
        judul: "Persetujuan Perbaikan:",
        keterangan: [
            " a. Jika customer setuju dengan estimasi biaya dan waktu, mereka memberikan persetujuan untuk memulai perbaikan.",
            "b. Customer mungkin diminta untuk membayar sejumlah uang muka jika diperlukan.",
        ],
    },
    {
        urutan: "7",
        judul: "Perbaikan Barang:",
        keterangan: [
            "a. Teknisi melakukan perbaikan sesuai dengan kesepakatan.",
            " b. Customer bisa menunggu di toko atau memberikan alamat pengiriman jika perbaikan memerlukan waktu lebih lama.",
        ],
    },
    {
        urutan: "8",
        judul: "Pengambilan Barang:",
        keterangan: [
            "a. Setelah perbaikan selesai, customer diinformasikan untuk mengambil barang mereka.",
            "b. Customer membayar sisa biaya perbaikan dan mengambil barang yang telah diperbaiki.",
        ],
    },
];

const OnlinePesanMenus = [
    
    {
        urutan: "1",
        judul: "Pengajuan Permintaan Perbaikan:",
        keterangan: [
            "a. Customer mengunjungi situs web toko atau menggunakan aplikasi seluler untuk mengajukan permintaan perbaikan.",
            "b. Customer memberikan informasi tentang barang yang akan diperbaiki dan deskripsi masalah yang dihadapi.",
        ],
    },
    {
        urutan: "2",
        judul: "Konsultasi Online:",
        keterangan: [
            "a. Toko menghubungi customer melalui email atau pesan dalam aplikasi untuk memberikan konsultasi awal tentang perbaikan yang diperlukan.",
            "b. Jika perlu, customer dapat mengirimkan foto atau video tentang masalah barang untuk membantu dalam analisis.",
        ],
    },
    {
        urutan: "3",
        judul: "Estimasi Biaya dan Waktu:",
        keterangan: [
            " a. Berdasarkan informasi yang diberikan oleh customer, toko memberikan estimasi biaya perbaikan dan perkiraan waktu penyelesaian.",
            "b. Customer diminta untuk menyetujui estimasi sebelum perbaikan dimulai.",
        ],
    },
    {
        urutan: "4",
        judul: "Pengiriman Barang ke Toko:",
        keterangan: [
            "a. Jika customer setuju dengan estimasi, mereka harus mengirimkan barang yang akan diperbaiki ke alamat yang ditentukan oleh toko.",
            "b. Customer bertanggung jawab atas biaya pengiriman.",
            <a href="ddd" className="text-blue-500 underline" >Klik Disini Untuk Lihat Alamat Toko</a>
        ],
    },
    {
        urutan: "5",
        judul: "Perbaikan Barang:",
        keterangan: [
            "a. Setelah toko menerima barang, teknisi akan melakukan perbaikan sesuai dengan kesepakatan.",
            "b. Jika ditemukan masalah tambahan yang memerlukan biaya tambahan, toko akan menghubungi customer terlebih dahulu untuk mendapatkan persetujuan.",
            
        ],
    },
    {
        urutan: "6",
        judul: "Konfirmasi Selesai dan Pembayaran:",
        keterangan: [
            "a. Setelah perbaikan selesai, toko menginformasikan customer melalui email atau pesan dalam aplikasi.",
            "b. Customer melakukan pembayaran biaya perbaikan melalui metode pembayaran yang telah disepakati sebelumnya.",
        ],
    },
    {
        urutan: "7",
        judul: "Pengiriman Kembali Barang:",
        keterangan: [
            "a. Setelah pembayaran diterima, toko mengirimkan barang yang telah diperbaiki kembali ke customer.",
            "b. Customer menerima barang dan memberikan konfirmasi penerimaan.",
        ],
    },
];


export const PilihCaraPemesanan = () => {
    const [open, setOpen] = useState("offline");
    return (
        <section className="w-full pb-11 h-fit  pt-2 px-4">
            <BigMxWrapper className="mb-4">
                <div className="flex gap-5">
                    <button
                        disabled={open == "offline"}
                        onClick={() => {
                            setOpen("offline");
                        }}
                        className="btn bg-stone-200  text-blackSecondary"
                    >
                        Di tempat / Offline
                    </button>
                    <button
                        disabled={open == "online"}
                        onClick={() => {
                            setOpen("online");
                        }}
                        className="btn bg-stone-200  text-blackSecondary"
                    >
                        Online
                    </button>
                </div>
                <div className="my-6 h-fit" >
                    <MethodPemesanan datas={OfflinePesanMenus} open={open == "offline"} method={"DI TEMPAT / OFFLINE"} />
                    <MethodPemesanan datas={OnlinePesanMenus} open={open == "online"} method={"ONLINE"} />
                </div>
            </BigMxWrapper>
        </section>
    );
};
