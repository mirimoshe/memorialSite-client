import React, { useState } from 'react'
import '../style/deceadDetailes.css'
import { CiLocationOn } from "react-icons/ci";
import { HDate } from '@hebcal/core';
import { date } from 'yup';

function DeceadDetailes({ decead }) {
    const displayDates = (decead) => {
        const birth_date =decead.birth_date ? new Date(decead.birth_date).getFullYear():null;
        const deathdate =decead.death_date? new Date(decead.death_date).getFullYear():null;

        if (birth_date && deathdate) {
            return (
                <p>{birth_date} - {deathdate}</p>
            );
        } else if (birth_date) {
            return <p>{birth_date}</p>;
        } else if (deathdate) {
            return <p>{deathdate}</p>;
        } else {
            return null;
        }
    };
    const ndate=new Date(decead.death_date)
    const [hebDatethen,sethebDatethen] =useState(new HDate(ndate)) ;
    
    return (
        <>
            <div className='detaiels-container'>
                <div className='line-detailes'></div>
                <h2 style={{marginRight:'30px',marginBottom:'5px'}}>{decead &&decead.first_name} {decead &&decead.last_name} ז"ל</h2>
                <p style={{marginRight:'30px',marginBottom:'5px'}}> {decead &&decead.death_detailes}</p>
                <p style={{marginRight:'30px',marginBottom:'5px'}}>{decead.death_date&&hebDatethen.renderGematriya()}</p>
                <p style={{marginRight:'30px',marginBottom:'5px',marginTop:0}}>{decead && displayDates(decead)}</p>
            </div>
        </>
    )
}

export default DeceadDetailes