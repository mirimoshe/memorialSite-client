import React, { useEffect, useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import VanillaTilt from 'vanilla-tilt';
import '../style/deceadimg.css'

import { Navigation, EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDecead } from '../Decead/deceadSlice';

function DeceadImg({ decead }) {
    const tiltRef = useRef();

    useEffect(() => {
        VanillaTilt.init(tiltRef.current, {
            max: 20,
            speed: 300,
            glare: true,
            'max-glare': 0.3
        });
        return () => {
            if (tiltRef.current && tiltRef.current.vanillaTilt) {
                tiltRef.current.vanillaTilt.destroy();
            }
        };
    }, []);
    return (
        <>
            <div className='body-slider'>

                {decead.imagesUrl&&decead.imagesUrl.length == 1 ? (
                    <div className='single-img' ref={tiltRef} style={{ backgroundImage: `url(${decead.imagesUrl[0]})` }}>

                    </div>

                ) : (
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,

                        }}
                        navigation={true}
                        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                        className="mySwiper"
                    >
                        {decead.imagesUrl&&decead.imagesUrl.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img src={img} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}


            </div>
        </>
    )
}


export default DeceadImg