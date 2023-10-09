import React from 'react'
import { useState } from 'react'
import '../components/animation.css';
const EventsCard = (props) => {
  const t = props.order === 'flex-row' ? '-10%' : '10%';
  return (
    <div id={props.reference} className={`flex ${props.order} bg-[#8BD6ECB2] m-[3rem] p-[2.3125rem] text-[#ffffff]`} style={{
      borderRadius: '2.3125rem 2.4375rem 2.3125rem 2.125rem', transitionDuration: '1000ms ease'
    }}>
      <div className='flex flex-col'>
        <h1 className='text-[2rem] uppercase' style={{ marginBottom: '3rem' }}>{props.name}</h1>
        <p>{props.desc}</p>
      </div>
      <img className='h-[25rem]' src={props.photo} />
    </div >
  )
}

export default EventsCard
