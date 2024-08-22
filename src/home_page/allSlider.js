import React from 'react'
import {yam} from '../images/yam.jpg'

function AllSlider() {
  return (
    <div className='slider-body'>
    <div className='container'>
      <div className='slider-warpper'>
        <div className='info-card-list'>
          <img src={yam} className='image-item'/>
          <img src={yam} className='image-item'/>
          <img src={yam} className='image-item'/>
          <img src={yam} className='image-item'/>
          <img src={yam} className='image-item'/>
          <img src={yam} className='image-item'/>
          <img src={yam} className='image-item'/>
          <img src={yam} className='image-item'/>
          <img src={yam} className='image-item'/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AllSlider