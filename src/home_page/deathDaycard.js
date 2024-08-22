import React, { useEffect, useState } from 'react'
import '../style/deathDayCard.css';
import { useDispatch, useSelector } from 'react-redux'
import { fetchDecead } from '../Decead/deceadSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Decead_card from './decead_card';
import '../style/decead_card.css';
import { HDate } from '@hebcal/core';
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";


import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Grid } from '@mui/material';

function DeathDaycard() {
    const deceads = useSelector(state => state.decead.deceads);
    const status = useSelector(state => state.decead.status)
    const dispatch = useDispatch();
    useEffect(() => {
        if (status != 'fulfilled') {
            dispatch(fetchDecead())
        }

    }, [])

    function isSameDate(death_date) {
        const ldate = new Date(death_date);
        const curDate = new Date();

        const hebDatethen = new HDate(ldate);
        const hebDatecur = new HDate(curDate);

        const hebMthen = hebDatethen.getMonth();
        const hebMcur = hebDatecur.getMonth();

        const hebDthen = hebDatethen.getDate();
        const hebDcur = hebDatecur.getDate();

        const curHDate = new HDate();
        //leap year check
        if (curHDate.isLeapYear()) {
            if (hebMthen === hebMcur && hebDthen === hebDcur) {
                return true;
            }
        }
        else {
            if (hebMthen === 13) {
                if (12 === hebMcur && hebDthen === hebDcur) {
                    return true;
                }
            }
            else {
                if (hebMthen === hebMcur && hebDthen === hebDcur) {
                    return true;
                }
            }
        }

        return false;
    }

    return (
        <>
            <div className='body-deathCard'>
                {deceads.length > 0 && deceads.filter(item => isSameDate(item.death_date)).length > 0 ? (
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={20}
                        navigation={true}
                        mousewheel={true}
                        keyboard={true}
                        loop={true}
                        centeredSlides={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper"
                    >
                        {deceads.map((item) => {
                            if (isSameDate(item.death_date)) {
                                return <SwiperSlide key={item.id}><Decead_card addDecead={item} /></SwiperSlide>;
                            }
                            return null;
                        })}
                    </Swiper>
                ) : null}
            </div>

        </>
    )
}
export default DeathDaycard

{/* <div className='body-deathCard'>
                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={20}
                    navigation={true}
                    mousewheel={true}
                    keyboard={true}
                    loop={true}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    {deceads.filter(item => isSameDate(item.death_date)).length > 0 ? (
                        deceads.map((item) => {
                            if (isSameDate(item.death_date)) {
                                return <SwiperSlide  key={item.id}><Decead_card addDecead={item} /></SwiperSlide>;
                            }
                        })
                    ) : (
                        <div className='noDate-container' >
                            <p className='noDate-message1'>לְמַעַן יֵדְעוּ דּוֹר אַחֲרוֹן בָּנִים"</p>
                            <p className='noDate-message2'>"יִוָּלֵדוּ יָקֻמוּ וִיסַפְּרוּ לִבְנֵיהֶם</p>
                        </div>
                    )}
                </Swiper>


                <div className="swiper-pagination"></div>
            </div > */}