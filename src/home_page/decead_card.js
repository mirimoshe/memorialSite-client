import React, { useEffect } from 'react'
import yam from "../images/yam.jpg"
import { useSelector } from 'react-redux'
import livia from '../images/livya.jpeg'
import ImageFromUrl from './imageForm'
import { useState } from 'react'
import { HDate } from '@hebcal/core';


function Decead_card(props) {
    const [images, setImages] = useState([]);
    const [hebDatethen,sethebDatethen] =useState(new HDate(props.death_date)) ;

    return (
        <>
            <div className='card'>
                <div className='imgBx'>
                    <img src={props.addDecead.imagesUrl[0]} />
                </div>
                <div className='content-card'>
                    <h2 className='h2-name'>{props.addDecead.first_name} {props.addDecead.last_name}</h2>
                    <p>{hebDatethen.renderGematriya()}</p>
                    <p className='p-name'>{props.addDecead.burial_location} </p>
                </div>
            </div>
        </>

    )
}
export default Decead_card