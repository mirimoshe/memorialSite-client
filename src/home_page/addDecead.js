import React, { useState, useRef, useEffect } from 'react';
import '../style/addDecead.css';
import TypeWriter from 'react-typewriter';
import { render } from '@testing-library/react';
import addPage from '../images/addDeceaedPage.png'
import Addition from './additionPage';
import Signin from './signbtn';
import Typewriter from 'typewriter-effect';



function AddDecead() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
        document.body.style.overflow = 'hidden'; // Disable scrolling on the background
    };

    const closeModal = () => {
        setShowModal(false);
        document.body.style.overflow = 'auto'; // Enable scrolling on the background
    };

    const handleModalClick = (event) => {
        if (event.target.classList.contains('modal')) {
            closeModal();
        }
    };

    const [firstTypewriterDone, setFirstTypewriterDone] = useState(false);
    return (
        <>
            <div className='add-body'>
                <div className='add_content'>
                    <h2>מכירים מישהו שלא מופיע</h2>
                    
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString('כנסו לדף ההוספה והוסיפו את יקירכם <br />כדי שנוכל ללמוד את סיפורי חייהם של קדושי ישראל ')
                                .pauseFor(1000)
                                .callFunction(() => {
                                    setFirstTypewriterDone(true);
                                })
                                .start();
                        }}
                    />

                    {firstTypewriterDone && (
                        <Typewriter
                            options={{
                                strings: ['#נזכור_ולא_נשכח', '#עם_ישראל_חי'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    )}


                </div>

                <Signin></Signin>

            </div>

        </>
    )
}
export default AddDecead;