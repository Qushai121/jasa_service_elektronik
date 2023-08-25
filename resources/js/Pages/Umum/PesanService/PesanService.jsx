import { HeaderTitleUmum } from '@/Components/HeaderTitleUmum'
import PrimaryButton from '@/Components/PrimaryButton'
import { UmumLayout } from '@/Layouts/umum/UmumLayout'
import { BigMxWrapper } from '@/Layouts/wrapper/BigMxWrapper'
import { Head, useForm } from '@inertiajs/react'
import React from 'react'
import Swal from 'sweetalert2'

const content = "Perbaikan elektronik dalam genggaman tanganmu. Pesan layanan dengan mudah dan cepat untuk memulihkan perangkat favoritmu."

const PesanService = () => {

  const { data, setData, post, processing, errors, reset } = useForm({
    subject:'Pesanan Service',
    nama: "",
    nomortelp: "",
    pesan: "",
    
});

const submit = (e) => {
    e.preventDefault();
    post(route("bantuan.store"), {
        onSuccess: (e) => {
            Swal.fire({
                title: 'Berhasil',
                text: e.props.flash.success,
                icon: 'success',
                confirmButtonText: 'Ok'
            })
        },
        preserveState:false,
    });
};

console.log(data)

  return (
    <UmumLayout>
      <Head>
  <title>Cara Pemesanan</title>
  <meta name="description" content={content} />
</Head>
<HeaderTitleUmum images={'images/bg-bantuan.jpg'} title={'Pemesan Service'} subTitle={'Hubungi kami dengan mengisi form atau juga langsung dengan telepon'} />
<BigMxWrapper className={"h-fit py-8 "}>
                <BigMxWrapper className="h-fit">
                    <form onSubmit={submit} >
                        <div className="mt-4">
                            <label htmlFor="nama" value="nama">
                                Nama Anda :
                            </label>
                            <input
                                id="nama"
                                type="text"
                                name="nama"
                                className="mt-1 block w-full bg-gray-100"
                                autoComplete="username"
                                onChange={(e) =>
                                    setData("nama", e.target.value)
                                }
                            />
                            {/* <InputError message={errors.nama} className="mt-2" /> */}
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="nomortelp"
                                value="nomortelp"
                            >
                                Nomor telepon yang bisa dihubungi kami :
                            </label>
                            <input
                                id="nomortelp"
                                type="number"
                                name="nomortelp"
                                className="mt-1 block w-full bg-gray-100"
                                autoComplete="username"
                                onChange={(e) =>
                                    setData("nomortelp", e.target.value)
                                }
                            />
                            {/* <InputError message={errors.nama} className="mt-2" /> */}
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="pesan"
                                value="pesan"
                            >
                                Pesan Keluhan Barang Anda :
                            </label>
                            <textarea
                                id="pesan"
                                type="text"
                                name="pesan"
                                className="mt-1 h-[20vh] block w-full bg-gray-100"
                                autoComplete="current-pesan"
                                onChange={(e) =>
                                    setData("pesan", e.target.value)
                                }
                            />

                            {/* <InputError message={errors.password} className="mt-2" /> */}
                        </div>
                        <div className="flex items-center justify-end mt-4">
                            <PrimaryButton disabled={processing} type={'submit'} className="ml-4">
                                Kirim
                            </PrimaryButton>
                        </div>
                    </form>
                    <div className='pt-4 '>
                      <p className='badge badge-info h-fit py-1 px-4 text-blackMain font-bold' >
                      Setelah anda mengirimkan pesanan kami akan menguhungi melalui nomor telpon yang diberikan untuk
                      mengkonfirmasi pesannan dan mendiskusikan proses selanjutnya 
                      </p>
                    </div>
                </BigMxWrapper>
            </BigMxWrapper>
    </UmumLayout>
  )
}

export default PesanService