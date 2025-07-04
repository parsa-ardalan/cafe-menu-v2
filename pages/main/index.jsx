import Data from "@/data/MainPage.json";
import Item from "./Item";

export default function MainPage() {

    return (
        <div className="h-screen w-screen backdrop-blur-xs backdrop-brightness-50">

            {/* Header */}

            <div className="h-1/2"> </div>

            {/* item tabs */}

            <div className="h-1/2 rounded-t-4xl bg-white/20 px-8 pt-5">
                {
                    Data.map(item => (

                        <Item key={item.id} name={item.category} image={item.imageLink} slug={item.slug} />
                    ))
                }

            </div>

        </div>
    );
}
