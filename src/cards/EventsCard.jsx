import React from 'react'

const EventsCard = (props) => {
  const t = props.order === 'flex-row' ? '-10%' : '10%';
  return (
    <div className={`flex ${props.order} bg-[#8BD6ECB2] m-[3rem] p-[2.3125rem] text-[#ffffff]`} style={{ transform: `translateX(${t})`, borderRadius: '2.3125rem 2.4375rem 2.3125rem 2.125rem' }}>
      <div className='flex flex-col'>
        <h1 className='text-[2rem] uppercase' style={{ marginBottom: '3rem' }}>{props.name}</h1>
        <p>{props.desc}</p>
      </div>
      <img className='h-[25rem]' src={props.photo} alt=""/>
    </div>
  )
}

export default EventsCard