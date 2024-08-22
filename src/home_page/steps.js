import React from 'react'
import '../style/steps.css'
function Steps() {
    return (
        <div className='steps-body'>
            <div className='steps-container'>
                <div className='step-card'>
                    <h2>01</h2>
                    <h3>צעד ראשון</h3>
                    <p style={{direction:'rtl'}}>הרשמו לאתר בכדי שתוכלו להוסיף את יקירכם</p>
                </div>
                <div className='step-line'></div>
                <div className='step-card'>
                    <h2>02</h2>
                    <h3>צעד שני</h3>
                    <p style={{direction:'rtl'}}>הכנסו לדף ההוספה והוסיפו את הפרטים הדרושים</p>
                </div>
                <div className='step-line'></div>
                <div className='step-card'>
                    <h2>03</h2>
                    <h3>צעד שלישי</h3>
                    <p style={{direction:'rtl'}}>הוסיפו סיפורים ותמונות לדף האישי</p>
                </div>
            </div>
        </div>
    )
}

export default Steps