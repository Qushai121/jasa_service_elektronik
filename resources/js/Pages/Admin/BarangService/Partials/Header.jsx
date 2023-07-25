import React from "react";

const Header = ({title,description}) => {
    return (
        <div className="bg-gray-100 my-5 mx-5 py-3 rounded-sm">
            <div className="px-16">
                <h1 className="text-[18px] font-semibold font-montserrat  ">
                    {title}
                </h1>
                <p className="text-sm font-sans" >{description}</p>
            </div>
        </div>
    );
};

export default Header;
