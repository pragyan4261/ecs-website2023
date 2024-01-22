import React from 'react'
import { Link } from 'react-router-dom'
const ResourceHubCard = (props) => {
  return (
    <div className='flex flex-col items-center bg-[#aaaabb55] md:flex-row  mt-[1rem] mb-[1rem] text-[#ffffff] text-[1.5rem] p-[1rem] rounded-[1rem] border-[2px] border-[#ffffff55] w-[82%] m-auto'
      style={{ boxShadow: 'inset 0 0 2rem #ffffff55' }}
    >
      <label style={{ margin: '0 auto' }} className='text-lg sm:text-2xl'>{props.sem}</label>
      <div style={{ display: 'flex', minWidth: '20%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', margin: '0 auto', boxShadow: 'inset 0 0 2rem #ffffff55' }} className='bg-[#aaaadd55] rounded-[0.8rem] border-[2px] border-[#ffffff55] p-[0.2rem]' >
        <Link to={props.notes} className='p-5  text-sm sm:text-lg'>NOTES</Link>
        <Link to={props.course} style={{ height: '100%', borderLeft: '2px solid #ffffff' }} className='text-sm p-5 sm:text-lg'>COURSE<br /> STRUCTURE</Link>
      </div>
    </div>
  )
}

export default ResourceHubCard
