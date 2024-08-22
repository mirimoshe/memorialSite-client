import React, { useEffect, useState, useRef } from 'react';
import '../style/aboutStyle.css';
import prayers from '../images/prayers.mp4'
import 'boxicons';
import friends from '../images/friends.png'
import friend2 from '../images/friends-2.png'
import { useDispatch, useSelector } from 'react-redux';
import { fetchStory } from '../Story/storySlice';
import { fetchResponse } from '../Response/responseSlice';
import { fetchDecead } from '../Decead/deceadSlice';
import { useInView } from 'react-intersection-observer';

function AboutPage() {
    const { ref, inView } = useInView({
        threshold: 0.5, // Trigger animation when at least 50% of the element is visible
    });
    const story = useSelector(state => state.story.stories)
    const response = useSelector(state => state.response.responses)
    const deceads = useSelector(state => state.decead.deceads);
    const status = useSelector(state => state.story.status)
    const dispatch = useDispatch();
    useEffect(() => {
        if (status != 'fulfilled') {
            dispatch(fetchStory())
            dispatch(fetchResponse())
            dispatch(fetchDecead())
        }
    }, [])
    const [totalSum, setTotalSum] = useState(0);
    const [favoriteNum, setFavoriteNum] = useState(0);
    const [excitingNum, setExcitingNum] = useState(0);
    const [empoweringNum, setEmpoweringNum] = useState(0);
    const [heroismNum, setHeroismNum] = useState(0);
    useEffect(() => {
        const calculatedTotalSum = story.reduce((sum, obj) =>
            sum + obj.likes_number + obj.reported_number + obj.favorite_number +
            obj.empowering_number + obj.exciting_number + obj.heroism_number +
            obj.thanksgiving_number, 0);
        setTotalSum(calculatedTotalSum);
        

        const calculatedFavoriteNum = story.reduce((sum, obj) => sum + obj.favorite_number, 0);
        setFavoriteNum(calculatedFavoriteNum);

        const calculatedExcitingNum = story.reduce((sum, obj) => sum + obj.exciting_number, 0);
        setExcitingNum(calculatedExcitingNum);

        const calculatedEmpoweringNum = story.reduce((sum, obj) => sum + obj.empowering_number, 0);
        setEmpoweringNum(calculatedEmpoweringNum);

        const calculatedHeroismNum = story.reduce((sum, obj) => sum + obj.heroism_number, 0);
        setHeroismNum(calculatedHeroismNum);
    }, [story]);

    const [numDeceads, setnumDeceads] = useState(0);
    const [count, setCount] = useState(() => deceads.filter(item => item.imagesUrl && item.imagesUrl.length > 1).length);
    useEffect(() => {
        setCount(deceads.filter(item => item.imagesUrl && item.imagesUrl.length > 1).length);
        setnumDeceads(deceads.length);
    }, [deceads]);

    const [numFriendStory, setnumFriendStory] = useState(0);
    const [countFriend, setcountFriend] = useState(() => story.filter(item => item.relation_type == 'friend').length);
    useEffect(() => {
        setnumFriendStory(story.filter(item => item.relation_type == 'friend').length);
        setcountFriend(story.length);
    }, [story]);

    const [numFamilyStory, setnumFamilyStory] = useState(0);
    const [countFamily, setcountFamily] = useState(() => story.filter(item => item.relation_type == 'friend').length);
    useEffect(() => {
        setcountFamily(story.filter(item => item.relation_type == 'family').length);
        setnumFamilyStory(story.length);
    }, [story]);

    const [uniqueStoryIdsCount, setUniqueStoryIdsCount] = useState(0);
    useEffect(() => {
        const uniqueStoryIds = new Set(response.map(res => res.storyId));
        setUniqueStoryIdsCount(uniqueStoryIds.size);
    }, [response]);



    const circumference = Math.PI * 2 * 80;
    const strokeDashArrayFavorite = (Math.floor(favoriteNum / totalSum)) * circumference
    const strokeDashOffsetFavorite = circumference - strokeDashArrayFavorite;

    return (
        <div className='about-body'>
            <section className='about'>
                <div className='about-content' style={{ direction: 'rtl' }}>
                    <h3>היי, נעים מאוד </h3>
                    <h1>מירי משה</h1>
                    <p>תלמידת סמינר במגמת מדעי מחשב</p>
                    <div className='about-sci'>
                        <a href='#' id='a1'><box-icon type='logo' name='facebook' color='#fff'></box-icon></a>
                        <a href='#' id='a2'><box-icon type='logo' name='instagram' color='#fff'></box-icon></a>
                        <a href='#' id='a3'><box-icon type='logo' name='whatsapp' color='#fff' ></box-icon></a>
                        <a href='#' id='a4'><box-icon name='tiktok' type='logo' color='#fff'></box-icon></a>
                    </div>
                </div>
            </section>
            <section className='about-detailes' id='about-detailes'>
                <div className='about-detailes-img'>
                    <img src={friend2} />
                </div>
                <div className='about-detailes-content'>
                    <h2>אודות<span>לזכור</span></h2>
                    <h4>הנצחת סיפור חייהם של יהודים שנרצחו על קידוש השם</h4>
                    <p>אתר זיכון ברזל הוא פלטפורמת הנצחה בה משפחה חברים ומכרים יכולים לכתוב ולשתף אודות יקירהם<br />
                        האתר פתוח לכל מי שמעוניין לקרוא ללמוד ולדעת אודות אלו שנהרגו על קידוש השם<br />
                    </p>
                </div>
            </section>
            <section className='services' id='services'>
                <div className='services-container'>
                    <h1 className='ser-title'>שירות<span>האתר</span></h1>
                    <div className='services-list'>

                        <div style={{ direction: 'rtl', width: '30%' }}>
                            <box-icon className="i" name='image-add' color='#f6ff00' ></box-icon>
                            <h2>גלריה</h2>
                            <p>
                                אפשרות להוספת תמונות <br />
                                כל מי שיש בידו תמונות של הנפטר יכול להוסיף תמונות בעמוד האישי<br />

                            </p>
                        </div>
                        <div style={{ direction: 'rtl', width: '30%' }}>
                            <box-icon className="i" name='location-plus' color='#f6ff00' ></box-icon>
                            <h2>מקום קבורה</h2>
                            <p>מקום הקבורה מוצג בדף האישי <br />
                                וביום השנה גם בדף הבית
                            </p>
                        </div>
                        <div style={{ direction: 'rtl', width: '30%' }}>
                            <box-icon className="i" name='book-add' color='#f6ff00'></box-icon>
                            <h2>סיפורים</h2>
                            <p>ישנה אפשרות להוסיף סיפור <br />
                                בצורה כזו נוכל להגיע לכל סיפור אודות הנפטר/ת<br />
                                הסיפורים מוצגים בדף האישי
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <h1 className='ser-title'>הנתונים<span>שלנו</span></h1>
            <section /*className='data-precent'*/ ref={ref} className={`data-precent ${inView ? 'animate-in' : 'animate-out'}`} /*className={'data-precent' && inView ? 'animate-in' : 'animate-out'}*/>
                <div className='data-container' id='data'>
                    <h1 className='header1'>כללי</h1>
                    <div className='site-data-bar'>
                        <div className='bar'>
                            <div className='data-info' style={{ direction: 'rtl' }}>
                                <span>נפטרים עם גלריה</span>
                            </div>
                            <div className='progress-line gallery' style={{}}>
                                <span style={{ width: `${Math.floor((count / numDeceads) * 100)}%` }} data-c={`${Math.floor((count / numDeceads) * 100)}%`}></span>
                            </div>
                        </div>
                        <div className='bar'>
                            <div className='data-info' style={{ direction: 'rtl' }}>
                                <span >סיפורים של חברים</span>
                            </div>
                            <div className='progress-line friends'>
                                <span style={{ width: `${Math.floor((numFriendStory / countFriend) * 100)}%` }} data-c={`${Math.floor((numFriendStory / countFriend) * 100)}%`}></span>
                            </div>
                        </div>
                        <div className='bar'>
                            <div className='data-info' style={{ direction: 'rtl' }}>
                                <span>סיפורים של משפחה</span>
                            </div>
                            <div className='progress-line users'>
                                <span style={{ width: `${Math.floor((countFamily / numFamilyStory) * 100)}%` }} data-c={`${Math.floor((countFamily / numFamilyStory) * 100)}%`}></span>
                            </div>
                        </div>
                        <div className='bar'>
                            <div className='data-info' style={{ direction: 'rtl' }}>
                                <span>סיפורים עם תגובות</span>
                            </div>
                            <div className='progress-line responses'>
                                <span style={{ width: `${Math.floor((uniqueStoryIdsCount / numFamilyStory) * 100)}%` }} data-c={`${Math.floor((uniqueStoryIdsCount / numFamilyStory) * 100)}%`} ></span>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='container1'>
                    <h1 className='header1' id='response-title'>תגובות</h1>
                    <div className='radial-bars'>
                        <div className='radial-bar'>
                            <svg x={"0px"} y={"0px"} viewBox='0 0 200 200'>
                                <circle className='progress-bar ' cx={"100"} cy={'100'} r={'80'} ></circle>
                                <circle className='path path-1' cx={"100"} cy={'100'} r={'80'} style={{ '--c': 502 - ((favoriteNum / totalSum) * 502) }}></circle>
                            </svg>
                            <div className='precentage'>{Math.floor((favoriteNum / totalSum) * 100)}%</div>
                            <div className='text-circle'>סיפורים אהובים</div>
                        </div>
                        <div className='radial-bar'>
                            <svg x={"0px"} y={"0px"} viewBox='0 0 200 200'>
                                <circle className='progress-bar ' cx={"100"} cy={'100'} r={'80'}></circle>
                                <circle className='path path-2' cx={"100"} cy={'100'} r={'80'} style={{ '--c': 502 - ((excitingNum / totalSum) * 502) }}></circle>
                            </svg>
                            <div className='precentage'>{Math.floor((excitingNum / totalSum) * 100)}%</div>
                            <div className='text-circle'>סיפורים מרגשים</div>
                        </div>
                        <div className='radial-bar'>
                            <svg x={"0px"} y={"0px"} viewBox='0 0 200 200'>
                                <circle className='progress-bar ' cx={"100"} cy={'100'} r={'80'}></circle>
                                <circle className='path path-3' cx={"100"} cy={'100'} r={'80'} style={{ '--c': 502 - ((empoweringNum / totalSum) * 502) }}></circle>
                            </svg>
                            <div className='precentage'>{Math.floor((empoweringNum / totalSum) * 100)}%</div>
                            <div className='text-circle'>סיפורים מחזקים</div>
                        </div>
                        <div className='radial-bar'>
                            <svg x={"0px"} y={"0px"} viewBox='0 0 200 200'>
                                <circle className='progress-bar ' cx={"100"} cy={'100'} r={'80'}></circle>
                                <circle className='path path-4' cx={"100"} cy={'100'} r={'80'} style={{ '--c': 502 - ((heroismNum / totalSum) * 502) }}></circle>
                            </svg>
                            <div className='precentage'>{Math.floor((heroismNum / totalSum) * 100)}%</div>
                            <div className='text-circle'>סיפורי גבורה</div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}
export default AboutPage