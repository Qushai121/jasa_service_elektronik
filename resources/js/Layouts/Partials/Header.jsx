import { router } from "@inertiajs/react";
import React, { useState } from "react";

const Header = ({title,description}) => {
const [open,setOpen] = useState(JSON.parse(localStorage.getItem('headerAdmin')))

    function handleSearch(e) {
        router.get(route(route().current()),{
            search :e.target.value,
            
        },
        { preserveState: true,
    preserveScroll:true,
        }
        )
    }
    
    function handlePerpage(e) {
        e.preventDefault()
        router.get(route(route().current()),{
            per_page :e.target.value,
            
        },
        { preserveState: true,
    preserveScroll:true,
    replace: true,
        }
        )
    }

    function handleOpen() {
        if(!open){
            localStorage.setItem('headerAdmin',true)
        }else{
            localStorage.setItem('headerAdmin',false)
        }
        setOpen(JSON.parse(localStorage.getItem('headerAdmin')))
    }

    const url = new URL(window.location.href);

// Get the search parameters from the URL
const searchParams = url.searchParams;

// Get the value of the "per_page" parameter
const perPage = searchParams.get("per_page");

    return (
        <div className="relative">
                   <button onClick={handleOpen} className="text-whiteMain mx-4 font-bold text-lg z-50 bg-gray-700 p-2 px-4 rounded-full -mb-4 mt-1 absolute -top-4" >
                    <p className={``} >
                            {open ? 'X' : 'Open'}
                    </p>
                            </button>
        <div className={`${open ? "py-4 xl:h-[17vh] h-[27vh] -translate-x-[0vw]" : " h-[0vh] -translate-x-[100vw]"} bg-gray-100 my-5 mx-5 duration-500  overflow-hidden  shadow-inner shadow-gray-950 rounded-md flex flex-col md:flex-row justify-between items-center  px-2 gap-4 xl:px-16`}>
            <div className="">
                <h1 className="text-[20px] font-semibold font-montserrat  ">
                    {title}
                </h1>
                <p className="text-sm font-sans" >{description}</p>
            </div>
            <div className="bg-gray-800 shadow-md shadow-gray-900 rounded-md w-full md:w-fit px-6 items-center flex flex-col py-3 gap-2" >
                <div className="flex" >
            <input type="text" id="cari" onChange={handleSearch} placeholder={'Cari'} className="input shadow-inner shadow-gray-900 input-bordered min-w-[80%] md:w-[15vw] mx-auto bg-whiteMain placeholder:text-blackMain " />
            {/* <label htmlFor="cari" className="bg-whiteMain shadow-inner shadow-gray-500 h-[5.6vh] flex justify-center px-2 rounded-lg ml-4">
            <img src="/icons/search.png" alt="" className=" object-scale-down" />
            </label> */}
                </div>
            <div className="flex justify-between w-full items-center">
                <p className="text-white" >Jumlah Data Per Page :</p>
                <select defaultValue={perPage} onChange={handlePerpage} className="select max-w-1 shadow-inner shadow-gray-500 bg-whiteMain">
  <option  value={10} >10</option>
  <option  value={25} >25</option>
  <option  value={50} >50</option>
  <option  value={75} >75</option>
  <option value={100}>100</option>
</select>
            </div>
            </div>
        </div>
        </div>

    );
};

export default Header;
