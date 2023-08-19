export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex w-fit whitespace-nowrap items-center px-4 py-2 bg-gray-800 dark:bg-gray-200 border rounded-md font-semibold text-xs text-white dark:text-gray-800 uppercase tracking-widest hover:bg-gray-700 dark:hover:bg-white focus:bg-gray-700 dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150 ${
                    disabled && "opacity-25 border border-blackMain"
                } ` + className
            }
            disabled={disabled}
        >
            
            {disabled ? (
                <div className="h-full w-full flex items-center justify-center" >
                <span className="loading loading-dots loading-sm"></span>
                </div>
            ) : (
                children
            )}
        </button>
    );
}
