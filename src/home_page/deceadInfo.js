import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, Outlet } from "react-router-dom";
import yam from "../images/yam.jpg"
import DeceadPage from '../decead_page/deceadPage'


function DeceadInfo({ addDecead }) {
    const deceads = useSelector(state => state.decead.deceads);
    return (
        <>
            <div className='info-card' >
                <img src={addDecead.imagesUrl && addDecead.imagesUrl[0]} />
                <div className='info-content'>
                    <h2>{addDecead.death_date && (new Date(addDecead.death_date)).getDate()}/{addDecead.death_date && (new Date(addDecead.death_date)).getMonth() + 1}</h2>
                    <h3>{addDecead.first_name} {addDecead.last_name}</h3>
                    <p>{addDecead.death_detailes}</p>
                    <NavLink className="navLink" to={`/decead-page/${addDecead.id}`}>Read More</NavLink>
                </div>

            </div>
            <Outlet />
        </>
    )
}
export default DeceadInfo