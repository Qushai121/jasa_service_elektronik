import React from "react";

const Divider = ({className = 'h-1 ',margin = 'my-2',width = 'w-full',color = 'bg-blueMain'}) => {
    
    return (
        <hr className={`${className} ${width} ${color} ${margin} rounded-lg border-t-0 opacity-100 `} />
    );
};

export default Divider;
