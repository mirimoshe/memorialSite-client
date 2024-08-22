import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDecead } from '../Decead/deceadSlice';
import DeceadInfo from './deceadInfo.js';
import '../style/deceadInfo.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../style/decead_card.css';
import 'swiper/css/scrollbar';
import { Navigation, Scrollbar, Pagination, Mousewheel, Keyboard, Grid, Autoplay } from 'swiper/modules';


function AllDeceadinfo() {
    const deceads = useSelector(state => state.decead.deceads);
    const status = useSelector(state => state.decead.status)
    const dispatch = useDispatch();
    useEffect(() => {
        if (status != 'fulfilled') {
            dispatch(fetchDecead())
        }
    }, [])

    return (
        <>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={10}
                keyboard={{
                    enabled: true,
                }}
                mousewheel={true}
                scrollbar={true}
                autoplay={{
                    delay:2500,
                }}
                loop={true}
                modules={[Navigation, Scrollbar, Pagination, Mousewheel, Keyboard, Grid,Autoplay]}
                className='mySwiper'
            >
                {deceads.map((item) => (<SwiperSlide style={{ marginTop: "100px",width:'280px' }}><DeceadInfo key={item.id} addDecead={item} /></SwiperSlide>))}
            </Swiper>



        </>
    )
}
export default AllDeceadinfo