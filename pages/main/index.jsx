import Data from "@/data/MainPage.json";
import Item from "./Item";

export default function MainPage() {

    return (

        <div className="h-screen w-screen backdrop-blur-xs backdrop-brightness-50 md:flex md:items-center md:justify-center">

            {/* Header */}

            <div className="h-1/2"> </div>

            {/* item tabs */}

            <div className="h-1/2 rounded-t-3xl bg-white/20 px-8 pt-5 md:w-3/12 md:rounded-lg">
                {
                    Data.map(item => (

                        <Item key={item.id} name={item.category} image={item.imageLink} slug={item.slug} />
                    ))
                }

            </div>

        </div>
    );
}
