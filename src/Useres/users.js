import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./usersSlice";



function UserList(){
 
    const user=useSelector(state=>state.user.users)
    const status=useSelector(state=>state.user.status)
    const dispatch=useDispatch();
    useEffect(()=>{
        
        if(status!='fulfilled'){
            dispatch(fetchUser())
        }
    },[])
    return(
        <>

        </>
    )
}
export default UserList