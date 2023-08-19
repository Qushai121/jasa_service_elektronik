
import { PagesFullMsg } from "@/Components/PagesMsg/PagesFullMsg";
import { UmumLayout } from "@/Layouts/umum/UmumLayout";
import { Head } from "@inertiajs/react";
import React from "react";

const content = "Jelajahi daftar harga parts dan suku cadang elektronik yang tersedia di layanan kami. Informasi lengkap mengenai harga komponen-komponen penting untuk perbaikan perangkat Anda. Kami menawarkan pilihan yang terjangkau dan berkualitas tinggi untuk memastikan perangkat Anda kembali berfungsi dengan baik tanpa merusak anggaran Anda."

const PartsUmum = () => {
    return (
        <UmumLayout>
            <Head>
  <title>Parts-Suku Cadang</title>
  <meta name="description" content={content} />
</Head>
           <PagesFullMsg msg={'Page Masih Dalam Perbaikan'}/>
        </UmumLayout>
    );
};

export default PartsUmum;
