import React, { useEffect, useState } from 'react'
import DeceadImg from './deceadImg';
import DeceadDetailes from './deceadDetailes';
import Navigate from './navigate';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import AllStories from './allStories';
import { fetchDecead } from '../Decead/deceadSlice';


function DeceadPage() {
  let { kod } = useParams();

  const deceads = useSelector(state => state.decead.deceads);
  let pageOf = deceads.find(obj => obj.id == kod);
 

  if(pageOf!=undefined){
    let jsonPageOf = {...pageOf}
    sessionStorage.setItem('jsonPageOf',JSON.stringify(jsonPageOf));
  }
  else
  {
    pageOf=JSON.parse(sessionStorage.getItem('jsonPageOf'));
  }



  return (
    <>
      <DeceadImg decead={pageOf}></DeceadImg>
      <DeceadDetailes decead={pageOf} ></DeceadDetailes>
      <Navigate kod={kod} decead={pageOf}></Navigate>
      <AllStories deceadid={kod}></AllStories>

    </>
  )
}
//decead={pageOf}
export default DeceadPage