import { router } from '@inertiajs/react';
import React from 'react'

// xl:w-[22vw]
export const Filter = ({JenisServices,kategori,jumlahData}) => {

    function handleSearch(e) {router.get(route('jenisServiceUmum.index'), {search: e}, {
        preserveState: true,
        preserveScroll:true,
        replace: true,
        
    });
}

  return (
    <div className='xl:min-w-[20rem]'>
    <div className=" pt-10 flex flex-col">
    <div className="bg-whiteMain py-4 px-4 shadow-lg">
        <p className="font-bold text-lg mb-2">
            Filter Kategori
        </p>
        <div onClick={()=>{handleSearch(null)}} className="flex  py-1">
            <div className="text-sm w-full hover:mx-4 duration-300 ease-in border-b-2 border-blackMain ">
                Semua Kategori
            </div>
            <p className="text-lg text-center">
                {jumlahData}
            </p>
        </div>
        {kategori.map((data,key)=> (
            <div onClick={(e) => handleSearch(data.name)} key={key} className="flex  py-1">
            <div className="text-sm w-full hover:mx-4 duration-300 ease-in cursor-pointer border-b-2 border-blackMain ">
                {data.name}
            </div>
            <p className="text-lg text-center whitespace-nowrap">
            {data.value}
            </p>
        </div>
       
        ))
        }

<div className='mt-2' >
        <input
        className='border-2 border-blackMain py-1 rounded-md w-full'
        placeholder=' Cari Service'
        name="query"
        onChange={(e) => handleSearch(e.target.value)}
/>
        </div>
    </div>
</div>
</div>
  )
}
