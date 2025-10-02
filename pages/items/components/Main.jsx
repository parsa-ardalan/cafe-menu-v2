export default function Main(props) {

    return (

        <div className="w-full h-auto grid grid-cols-4">


            {/* info */}

            <div className="col-span-2 mt-2">

                <div>
                    <h1 className="text-black mt-1 ml-10 text-sm text-stone-500"> size </h1>
                    <h2 className="text-black font-bold text-md ml-10 text-stone-300"> {props?.size} </h2>
                </div>

                <div>
                    <h1 className="text-black mt-1 ml-10 text-sm text-stone-500"> delivery </h1>
                    <h2 className="text-black font-bold text-md ml-10 text-stone-300"> {props?.delivery} min </h2>
                </div>

                <div>
                    <h1 className="text-black mt-1 ml-10 text-sm text-stone-500"> price </h1>
                    <h2 className="text-black font-bold text-md ml-10 text-stone-300"> {props?.price}$ </h2>
                </div>

            </div>

            {/* image codes */}

            <div className="col-span-2 ml-0 mt-4">
                <img
                    src={props?.image}
                    className="animation-spin fixed rounded-full h-44 w-44 animate-spin duration-10000"
                    alt="product image"
                />
            </div>

        </div>
    )
}