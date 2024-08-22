import React, { useState } from 'react'
import Addition from './additionPage';
import '../style/addStory.css';
import { useNavigate } from 'react-router-dom';

function Signin() {
    let navigate=useNavigate();

    const navFunc = () => {
        const isLoggedIn = sessionStorage.getItem('isLoggedIn');
        if(isLoggedIn){
            navigate("/add");
            
        }
        else{
            //alert("אופציה זו היא רק לרשומים")
            const section = document.getElementById('sign-up-area');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
            window.location.hash = 'sign-up-area';
        }
        
    }


    return (
        <div>
            <button className='add_page_example' onClick={navFunc}></button>
        </div>
    )
}


export default Signin