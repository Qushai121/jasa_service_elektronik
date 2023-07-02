const items = [
    {
        id: 1,
        title: "Back End Developer",
        department: "Engineering",
        type: "Full-time",
        location: "Remote",
    },
    {
        id: 2,
        title: "Front End Developer",
        department: "Engineering",
        type: "Full-time",
        location: "Remote",
    },
    {
        id: 3,
        title: "User Interface Designer",
        department: "Design",
        type: "Full-time",
        location: "Remote",
    },
];

export default function PaginateAdmin({ data }) {
    const {
        first_page_url,
        from,
        last_page,
        last_page_url,
        links,
        next_page_url,
        path,
        per_page,
        prev_page_url,
        to,
        total,
    } = data;
    // const isi = links.splice(0,2)
    console.log(links);
    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
                <a
                    href={prev_page_url}
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Previous
                </a>
                <a
                    href={next_page_url}
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Next
                </a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">1</span> to{" "}
                        <span className="font-medium">10</span> of{" "}
                        <span className="font-medium">97</span> results
                    </p>
                </div>
                <div>
                    <nav
                        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                        aria-label="Pagination"
                    >
                        <a
                            href={prev_page_url}
                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Previous</span>
                            {"<"}
                        </a>
                        {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                        {links.map((link, key) => {
                            return (
                                <a
                                    key={key}
                                    href={link.url}
                                    aria-current="page"
                                    className={`relative ${!link.url  ? 'bg-red-200' : ''} z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                                >
                                    {
                                        link.label.split(" ")[0] == '&laquo;' ? "Prev" : link.label.split(" ")[0]
                                    }
                                </a>
                            );
                        })}
                        <a
                            href={next_page_url}
                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Next</span>
                            {">"}
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    );
}
