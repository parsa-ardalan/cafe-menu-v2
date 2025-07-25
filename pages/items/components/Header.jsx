export default function Header(props) {

    return (

        <div className="w-full h-auto rounded-t-xl">

            {/* top */}

            <div className="h-auto w-full rounded-t-lg grid grid-cols-2">

                <div className="col-span-1" dir="ltr">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                        className="size-5 ml-7 mt-6 text-stone-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                </div>

                <div className="col-span-1" dir="rtl">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                        className="size-5 mr-7 mt-6 text-stone-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                    </svg>

                </div>

            </div>

            {/* name of product */}

            <div className="h-auto">
                <h1 className="font-bold text-xl ml-8 mt-3 text-stone-500"> {props?.name} </h1>
            </div>

            {/* tags */}

            <div className="h-2/5 mt-1">

                <span className="text-sm ml-8 text-stone-500"> categories </span>

                <div className="grid grid-cols-10 h-2/4 px-10 py-2 gap-4">

                    <div className="col-span-3 w-auto text-stone-500 rounded-2xl shadow-md shadow-black text-stone-400 text-center text-sm"> {props?.tag1} </div>
                    <div className="col-span-4 w-auto text-stone-500 rounded-2xl shadow-md shadow-black text-stone-400 text-center text-sm"> {props?.tag2} </div>
                    <div className="col-span-3 w-auto text-stone-500 rounded-2xl shadow-md shadow-black text-stone-400 text-center text-sm"> {props?.tag3} </div>

                </div>

            </div>

        </div>
    )
}