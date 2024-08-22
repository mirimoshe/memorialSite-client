import React, { useEffect, useState } from 'react'
import Decead_card from './decead_card'
import { useDispatch, useSelector } from 'react-redux'
import '../style/decead_card.css';
import { fetchDecead } from '../Decead/deceadSlice';
import yam from "../images/yam.jpg"
import { HDate } from '@hebcal/core';
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import Swiper from 'swiper';

function All_decead_card() {
    const deceads = useSelector(state => state.decead.deceads);
    const status = useSelector(state => state.decead.status)
    const dispatch = useDispatch();
    useEffect(() => {
        
        if (status != 'fulfilled') {
            dispatch(fetchDecead())
        }
        window.addEventListener("load", initSlider);
        initSlider();
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
        //לבדוק מקרי שנה מעוברת
        if (hebMthen === hebMcur && hebDthen === hebDcur) {
            return true;
        }
        return false;
    }
    const [direction, setdirection] = useState(0);

    const initSlider = () => {
         const cardContainer = document.querySelector(".slider-warpper .card-container");
         const slideButtons = document.querySelectorAll(".slider-warpper .slide-button");
 
         slideButtons.forEach(button => {
             button.addEventListener("click", () => {
                 let direction=button.id === "prev-slide" ? -1 : 1 ;
                 let scrollAmount = cardContainer.clientWidth * direction;
                 cardContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
             }, { once: false });
         });
        
     }



    return (
        <div className='card-body'>
            <div className='container'>
                <div className='slider-warpper'>
                    <button onClick={initSlider()} id='prev-slide' className='slide-button material-symbols-rounded'><FaChevronLeft /></button>
                    <div className='card-container'>
                        {deceads.map((item) => (<Decead_card key={item.id} addDecead={item}></Decead_card>))}
                    </div>
                    <button onClick={initSlider()} id='next-slide' className='slide-button material-symbols-rounded'><FaChevronRight /></button>
                </div>
                <div className='slider-scrollbar'>
                    <div className='scrollbar-track'>
                        <div className='scrollbar-thumb'>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )//
}
/*{deceads.map((item) => {
    if (isSameDate(item.death_date)){
        return <Decead_card key={item.id} addDecead={item}></Decead_card>;
    }
})}*/
export default All_decead_card