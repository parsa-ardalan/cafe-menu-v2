import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';



export default function Item(props) {

    console.log(props);

    return (

        <div className='h-screen w-screen flex items-center justify-center'>

            <div className="w-3/4 h-4/6 my-auto mx-auto rounded-2xl backdrop-brightness-110 backdrop-blur-md">

                <Header name={props?.name} />

                <Main image={props?.image} />

                <Footer />

            </div>

        </div>



    )
}