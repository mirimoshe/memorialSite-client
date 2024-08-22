import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchResponse } from "./responseSlice";




function ResponseList(){
  
    const response=useSelector(state=>state.response.responses)
    const status=useSelector(state=>state.response.status)
    const dispatch=useDispatch();
    useEffect(()=>{
        
        if(status!='fulfilled'){
            dispatch(fetchResponse())
        }
    },[])
    return(
        <>

        </>
    )
}
export default ResponseList