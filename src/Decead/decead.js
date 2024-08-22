import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { fetchUser } from "./usersSlice";
import { fetchDecead } from "./deceadSlice";


function DeceadList(){

    const decead=useSelector(state=>state.decead.decead)
    const status=useSelector(state=>state.decead.status)
    const dispatch=useDispatch();
    useEffect(()=>{
        if(status!='fulfilled'){
            dispatch(fetchDecead())
        }
    },[])
    return(
        <>

        </>
    )
}
export default DeceadList