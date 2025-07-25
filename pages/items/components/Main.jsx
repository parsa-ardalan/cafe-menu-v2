import { useState } from "react";

export default function Main(props) {

    let [def, changed] = useState(0);

    // functions

    const increase = () => {

        if (def < 10) {

            changed(def => def + 1)

        } else {
            changed(def => def)
        }
    }

    const decrease = () => {

        if (def > 0) {

            changed(def => def - 1)

        } else {
            changed(def => def = 0)
        }

    }

    return (

        <div className="w-full h-auto grid grid-cols-4">

            {/* info */}

            <div className="col-span-2 mt-2">

                <div>
                    <h1 className="text-black mt-1 ml-10 text-sm text-stone-500"> size </h1>
                    <h2 className="text-black font-bold text-md ml-10 text-stone-500"> {props?.size} </h2>
                </div>

                <div>
                    <h1 className="text-black mt-1 ml-10 text-sm text-stone-500"> delivery </h1>
                    <h2 className="text-black font-bold text-md ml-10 text-stone-500"> {props?.delivery} min </h2>
                </div>

                <div>
                    <h1 className="text-black mt-1 ml-10 text-sm text-stone-500"> price </h1>
                    <h2 className="text-black font-bold text-md ml-10 text-stone-500"> {props?.price}$ </h2>
                </div>

            </div>


            {/* image codes */}

            <div className="col-span-2 ml-0 mt-4">
                <img src={props?.image} className="fixed rounded-full h-44 w-44 justify-self-end" alt="product image" />
            </div>


            {/* quentity */}

            <div className="col-span-4 w-3/4 grid grid-cols-5 ml-3 py-2 gap-1 mt-6">

                <button className="col-span-1 shadow shadow-stone-500 text-sm outline-0 outline-black rounded-md h-full" onClick={decrease}> <span className="text-white"> - </span> </button>
                <span className="col-span-1 h-full text-center text-black text-stone-500"> {def} </span>
                <button className="col-span-1 shadow shadow-stone-500 text-sm outline-0 outline-black rounded-md h-full" onClick={increase}> <span className="text-white"> + </span> </button>
            </div>

        </div>
    )
}