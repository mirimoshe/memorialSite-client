import React, { useState } from 'react'
import '../style/navigate.css';
import ControlledOpenSelect from '../home_page/orderBy';
import BasicButtons from './button';
import ButtonStory from './button'
import ModalLoginForm from './button'
import AddImg from './addImg';


function Navigate({ kod, decead }) {
  return (
    <>
      <div className='main_navigate'>
        <ModalLoginForm DeceadId={kod}></ModalLoginForm>
        <AddImg item={decead} id={kod} ></AddImg>
      </div>
    </>
  )
}
export default Navigate;

