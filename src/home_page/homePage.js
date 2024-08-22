import React from 'react'
import '../style/homeStyle.css';
import BasicTextFields from './search.js';
import NavBar from './navBar.js';
import ControlledOpenSelect from './orderBy.js';
import { Directions } from '@mui/icons-material';
import { TbTextDirectionRtl } from 'react-icons/tb';
import Login from './login.js';
import Decead_card from './decead_card.js';
import Steps from './steps.js';
import DeceadInfo from './deceadInfo.js';
import All_decead_card from './all_decead_card.js';
import DeathDaycard from './deathDaycard.js'
import AddDecead from './addDecead.js';
import AllDeceadinfo from './allDeceadinfo.js';


function HomePage() {
    return (
        <>
            <div className='container_search_homePage'>

                <div className='container_title'>
                    <div className='title'>
                        חרבות ברזל. תשפד. 
                    </div>
                    <div className='line'></div>
                    <div className='detailes'>
                        <p>פלטפורמה שמאפשרת לשתף סיפורים</p>
                        <p>על חללים שהכרתם כדי שנוכל להגיע לכל סיפור חיים</p>
                    </div>
                </div>
            </div>
            <DeathDaycard></DeathDaycard>
            <Steps></Steps>

            <AllDeceadinfo></AllDeceadinfo>
            <AddDecead></AddDecead>
            <Login></Login>
        </>
    )
}

export default HomePage