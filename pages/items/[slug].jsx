import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Item from "./Item";

export default function Items() {

  const router = useRouter();
  const { slug } = router.query;

  const [data, setData] = useState(null);

  useEffect(() => {

    if (!slug) return;

    import(`@/data/${slug}.json`)

      .then((module) => setData(module.default))
      .catch(() => setData(null));

  }, [slug]);

  if (!data) return <div className="h-screen w-screen backdrop-blur-xs backdrop-brightness-50"> Loading... </div>;

  return (

    <div className="h-screen w-screen backdrop-blur-xs backdrop-brightness-50">

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide changed')}
        onSwiper={(swiper) => console.log(swiper)}>

        {

          data.map((item) => (

            <SwiperSlide key={item.id} className='h-screen w-screen'>

              <Item key={item?.id} name={item?.name}
                delivery={item?.delivery}
                info={item?.description}
                image={item?.imageLink}
                price={item?.price} size={item?.size}
                tag1={item?.tag1} tag2={item?.tag2} tag3={item?.tag3} />

            </SwiperSlide>
          ))
        }

      </Swiper>

    </div>
  );
}