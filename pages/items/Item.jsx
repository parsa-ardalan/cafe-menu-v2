import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

export default function Item(props) {

    console.log(props);

    return (

        <div className='h-screen w-screen flex items-center justify-center md:w-1/4'>

            <div className="w-3/4 h-4/6 my-auto mx-auto rounded-2xl backdrop-blur-sm backdrop-brightness-90">

                <Header name={props?.name} tag1={props?.tag1} tag2={props?.tag2} tag3={props?.tag3} />

                <Main image={props?.image} size={props?.size} price={props?.price} delivery={props?.delivery} />

                <Footer />

            </div>

        </div>
    )
}