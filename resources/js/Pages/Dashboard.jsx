import { TitleTwoXl } from '@/Components/TitleTwoXl';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({auth}) {
   
    return (
        <AuthenticatedLayout
            user={auth.user} >
            <Head title="Dashboard" />
            <div className="py-12 min-h-screen ">
                <div>
                <TitleTwoXl className={'text-whiteMain'}>
                    Jabatan : 
                <span className='text-whiteMain font-semibold text-lg'>  Data Entry</span>
                </TitleTwoXl>
                </div>
                <div className='' >
                    <div className='bg-slate-500 w-[18vw] rounded-lg text-center text-whiteMain' >
                        <TitleTwoXl>
                            Pekerjaan Di Ambil
                        </TitleTwoXl>
                        <h2 className='font-semibold'>89</h2>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
