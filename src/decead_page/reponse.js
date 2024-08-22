import React from 'react'

function Reponse({item}) {
  return (
    <div className='single-response'>
        <label id='res-nickname'>{item && item.nickname}</label>
        <div id='res-content'>{item && item.response}</div>
    </div>
  )
}

export default Reponse