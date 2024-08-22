import React, { useRef, useState, useEffect } from 'react'
import VanillaTilt from 'vanilla-tilt';
import { GrAddCircle } from "react-icons/gr";
import { CgChevronDown } from "react-icons/cg";
import { CgChevronRight } from "react-icons/cg";
import { VscSend } from "react-icons/vsc";
import { useDispatch, useSelector } from 'react-redux';
import { fetchResponse, postResponse, addResponse } from '../Response/responseSlice';
import Reponse from './reponse';
import { putStory, updateLikes, updateReports, updateFavorite, updateEmpowering, updateExcited, updateHeroism, updateThanksgiving } from '../Story/storySlice';


function OneStory({ item, onStoryClick, num }) {
    const dispatch = useDispatch();
    const [isChevronDown, setIsChevronDown] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const response = useSelector(state => state.response.responses)
    const status = useSelector(state => state.response.status)

    useEffect(() => {
        if (status != 'fulfilled') {
            dispatch(fetchResponse())
        }
    }, [])


    const toggleExpand = () => {
        setExpanded(!expanded);

    };

    const [filteredresponse, setfilteredresponse] = useState();

    const showResponses = (e) => {
        setIsChevronDown(!isChevronDown);
        onStoryClick(e, item);
        setfilteredresponse(response.filter(obj => obj.storyId == item.id));
    }


    const handleResSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        let formDataObject = {
            nickname: formData.get('nickname'),
            response: formData.get('response'),
            storyId: item.id,
        };
        dispatch(postResponse(formDataObject))
        dispatch(addResponse(formDataObject))
        setExpanded(!expanded);
    }

    const [numLikes, setnumLikes] = useState(item.likes_number);
    const updatelikes = () => {
        const formData = new FormData();
        setnumLikes(numLikes + 1);
      
        formData.append('nickname', item.nickname);
        formData.append('relation_type', item.relation_type);
        formData.append('story', item.story);
        formData.append('email_for_messages', item.email_for_messages);
        formData.append('likes_number', numLikes+1);
        formData.append('reported_number', numReports );
        formData.append('favorite_number', numFavorite);//
        formData.append('empowering_number', numEmpowering);//
        formData.append('exciting_number',numExciting);//
        formData.append('heroism_number', numHeroism);//
        formData.append('thanksgiving_number', numThanks);//
        let id = item.id;
        dispatch(putStory({ id, formData }));
        dispatch(updateLikes({ id, num }));
    }

    const [numReports, setnumReports] = useState(item.reported_number);
    const updateDislike = () => {
        const formData = new FormData();
        setnumReports(numReports + 1);
        
        formData.append('nickname', item.nickname);
        formData.append('relation_type', item.relation_type);
        formData.append('story', item.story);
        formData.append('email_for_messages', item.email_for_messages);
        formData.append('likes_number', numLikes);
        formData.append('reported_number', numReports + 1);
        formData.append('favorite_number', numFavorite);//
        formData.append('empowering_number', numEmpowering);//
        formData.append('exciting_number',numExciting);//
        formData.append('heroism_number', numHeroism);//
        formData.append('thanksgiving_number', numThanks);//
        let id = item.id;
        dispatch(putStory({ id, formData }))
        dispatch(updateReports({ id, num }));
    }

    const [numFavorite, setnumFavoritr] = useState(item.favorite_number);
    const updatefavorite = () => {
        const formData = new FormData();
        setnumFavoritr(numFavorite + 1);
        
        formData.append('nickname', item.nickname);
        formData.append('relation_type', item.relation_type);
        formData.append('story', item.story);
        formData.append('email_for_messages', item.email_for_messages);
        formData.append('likes_number', numLikes);
        formData.append('reported_number', numReports );
        formData.append('favorite_number', numFavorite+1);//
        formData.append('empowering_number', numEmpowering);//
        formData.append('exciting_number',numExciting);//
        formData.append('heroism_number', numHeroism);//
        formData.append('thanksgiving_number', numThanks);//
        let id = item.id;
        dispatch(putStory({ id, formData }))
        dispatch(updateFavorite({ id, num }));
    }

    const [numEmpowering, setnumEmpowering] = useState(item.empowering_number);
    const updateEmpower = () => {
        const formData = new FormData();
        setnumEmpowering(numEmpowering + 1);
        
        formData.append('nickname', item.nickname);
        formData.append('relation_type', item.relation_type);
        formData.append('story', item.story);
        formData.append('email_for_messages', item.email_for_messages);
        formData.append('likes_number', numLikes);
        formData.append('reported_number', numReports );
        formData.append('favorite_number', numFavorite);//
        formData.append('empowering_number', numEmpowering+1);//
        formData.append('exciting_number',numExciting);//
        formData.append('heroism_number', numHeroism);//
        formData.append('thanksgiving_number', numThanks);//
        let id = item.id;
        dispatch(putStory({ id, formData }))
        dispatch(updateEmpowering({ id, num }));
    }

    const [numExciting, setnumExciting] = useState(item.exciting_number);
    const updateExciting = () => {
        const formData = new FormData();
        setnumExciting(numExciting + 1);
        
        formData.append('nickname', item.nickname);
        formData.append('relation_type', item.relation_type);
        formData.append('story', item.story);
        formData.append('email_for_messages', item.email_for_messages);
        formData.append('likes_number', numLikes);
        formData.append('reported_number', numReports );
        formData.append('favorite_number', numFavorite);//
        formData.append('empowering_number', numEmpowering);//
        formData.append('exciting_number',numExciting+1);//
        formData.append('heroism_number', numHeroism);//
        formData.append('thanksgiving_number', numThanks);//
        let id = item.id;
        dispatch(putStory({ id, formData }))
        dispatch(updateExcited({ id, num }));
    }

    const [numHeroism, setnumHeroism] = useState(item.heroism_number);
    const updateHero = () => {
        const formData = new FormData();
        setnumHeroism(numHeroism + 1);
        
        formData.append('nickname', item.nickname);
        formData.append('relation_type', item.relation_type);
        formData.append('story', item.story);
        formData.append('email_for_messages', item.email_for_messages);
        formData.append('likes_number', numLikes);
        formData.append('reported_number', numReports );
        formData.append('favorite_number', numFavorite);//
        formData.append('empowering_number', numEmpowering);//
        formData.append('exciting_number',numExciting);//
        formData.append('heroism_number', numHeroism+1);//
        formData.append('thanksgiving_number', numThanks);//
        let id = item.id;
        dispatch(putStory({ id, formData }))
        dispatch(updateHeroism({ id, num }));
    }

    const [numThanks, setnumThanks] = useState(item.thanksgiving_number);
    const updateThanks = () => {
        const formData = new FormData();
        setnumThanks(numThanks + 1);
        
        formData.append('nickname', item.nickname);
        formData.append('relation_type', item.relation_type);
        formData.append('story', item.story);
        formData.append('email_for_messages', item.email_for_messages);
        formData.append('likes_number', numLikes);
        formData.append('reported_number', numReports );
        formData.append('favorite_number', numFavorite);//
        formData.append('empowering_number', numEmpowering);//
        formData.append('exciting_number',numExciting);//
        formData.append('heroism_number', numHeroism);//
        formData.append('thanksgiving_number', numThanks+1);//
        let id = item.id;
        dispatch(putStory({ id, formData }))
        dispatch(updateThanksgiving({ id, num }));
    }




    const tiltRef = useRef();
    useEffect(() => {
        if (!expanded) {
            VanillaTilt.init(tiltRef.current, {
                max: 20,
                speed: 300,
                glare: true,
                'max-glare': 0.3
            });
        }
        return () => {
            if (tiltRef.current && tiltRef.current.vanillaTilt) {
                tiltRef.current.vanillaTilt.destroy();
            }
        };
    }, [expanded]);
    return (
        <>
            <div className={`single-story-card ${expanded ? 'expanded' : ''}`} ref={tiltRef} >
                <lable id="lbl-nickname">{item && item.nickname}</lable>
                <div id="p-story" dangerouslySetInnerHTML={{ __html: (item.story).replace(/\n/g, '<br/>') }} />
                <div className='buttom-story'>
                    <div className='emujis'>
                        <h3 class="emoji-tooltip" data-tooltip="לייק" onClick={updatelikes}><p>{numLikes != 0 ? numLikes : ""}</p>&#128077;</h3>
                        <h3 class="emoji-tooltip" data-tooltip="אהבתי" onClick={updatefavorite}><p>{numFavorite != 0 ? numFavorite : ""}</p>&#129392;</h3>
                        <h3 class="emoji-tooltip" data-tooltip="מחזק" onClick={updateEmpower}><p>{numEmpowering != 0 ? numEmpowering : ""}</p>&#128170;</h3>
                        <h3 class="emoji-tooltip" data-tooltip="מרגש" onClick={updateExciting}><p>{numExciting != 0 ? numExciting : ""}</p>&#128549;</h3>
                        <h3 class="emoji-tooltip" data-tooltip="גיבור/ה" onClick={updateHero}><p>{numHeroism != 0 ? numHeroism : ""}</p>&#127941;</h3>
                        <h3 class="emoji-tooltip" data-tooltip="תודה" onClick={updateThanks}><p>{numThanks != 0 ? numThanks : ""}</p>&#128591;</h3>
                        <h3 class="emoji-tooltip" data-tooltip="דיווח" onClick={updateDislike}><p>{numReports != 0 ? numReports : ""}</p>&#x1F44E;</h3>
                    </div>

                    <GrAddCircle onClick={toggleExpand} />
                    {isChevronDown ? (
                        <CgChevronDown onClick={showResponses} />
                    ) : (
                        <CgChevronRight onClick={showResponses} />
                    )}
                    {num > 0 ? <p id='numResponse'>{num}</p> : ''}
                </div>
                {expanded && (
                    <form onSubmit={handleResSubmit} className='write-response'>
                        <label>Name</label>
                        <input className='resp-input' type='text' name='nickname' />
                        <label>Response</label>
                        <textarea className='resp-input' type='text' name='response' />
                        <button className='resp-input' id='sent-btn' type='submit' >sent </button>
                    </form>
                )}
                {isChevronDown && filteredresponse && filteredresponse.length === 0 ? (
                    <p id='res-available'>No responses available </p>
                ) : (
                    filteredresponse && filteredresponse.map((obj) => (
                        isChevronDown && <Reponse key={obj.id} item={obj} />
                    ))
                )}

            </div >
        </>


    )
}

export default OneStory

