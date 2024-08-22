import React from 'react';
import '../style/navbar.css';
import { TbCandle } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom'

function NavBar() {
  const navigate = useNavigate();

  const navFuncLog = () => {
    navigate('/');
    window.location.href = '/#sign-up-area';
    setTimeout(() => {
      const section = document.getElementById('sign-up-area');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 400);
  }

  return (
    <>
      <div id="navbar-body">
        <div className="topnav" id="myTopnav">
          <a className="active" onClick={() => { navigate('/') }}>זיכרון<span style={{color:'gray'}}>ברזל</span><TbCandle /></a>
          <a onClick={navFuncLog}>הרשמה</a>
          <a onClick={() => { navigate('about') }} >אודות</a>
        </div>

      </div>
    </>

  )
}
export default NavBar