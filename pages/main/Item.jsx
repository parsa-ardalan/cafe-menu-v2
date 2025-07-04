import Image from "next/image";
import Link from "next/link";

export default function Item(props) {

    return (

        <Link href={`/items/${props.slug}`}>

            <div className="flex h-1/5 mt-5 rounded-lg shadow shadow-black px-3 bg-white/10">

                {/* image */}

                <div className="w-1/4-r h-full flex items-center justify-center">
                    <Image alt={props.name} src={props.image} height={55} width={55} />
                </div>



                {/* main part */}

                <div className="w-2/4 h-full flex items-center">
                    <h1 className="ml-4 w-full h-auto text-stone-900"> {props.name} </h1>
                </div>



                {/* end part */}

                <div className="w-1/4 flex items-center justify-end">

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                        <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>

                </div>

            </div>

        </Link>
    )
}