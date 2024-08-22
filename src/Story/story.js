import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStory } from "./storySlice";

function StoryList(){
    
    const story=useSelector(state=>state.story.stories)
    const status=useSelector(state=>state.story.status)
    const dispatch=useDispatch();
    useEffect(()=>{
        
        if(status!='fulfilled'){
            dispatch(fetchStory())
        }
    },[])
    return(
        <>

        </>
    )
}
export default StoryList