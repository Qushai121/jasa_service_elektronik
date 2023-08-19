import React from 'react'

// lg:w-[22vw]
export const Filter = ({JenisServices}) => {
  return (
    <div className="flex-initial w-[20vw] pt-10  flex flex-col">
    <div className="bg-whiteMain py-4 px-4 shadow-lg">
        <p className="font-bold text-lg mb-2">
            Filter Kategori
        </p>
        <div className="flex  py-1">
            <div className="text-sm w-[90%] border-b-2 border-blackMain ">
                Semua Kategori
            </div>
            <p className="text-lg w-[10%] text-center">
                {JenisServices.data.length}
            </p>
        </div>
    </div>
</div>
  )
}
