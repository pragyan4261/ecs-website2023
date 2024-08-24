import React from 'react'
import { Link } from 'react-router-dom'
const FeedCard = (props) => {
  return (
    <div className='flex flex-col lg:flex-row justify-around lg:w-[75%] sm:w-[80%] p-[1.25rem] rounded-[3.75rem] m-[3rem]' style={{ boxShadow: '0px 4px 36px 0px rgba(61, 69, 70, 0.50)', backgroundColor: 'rgba(236, 247, 248, 0.40)' }}>
      <div className="flex flex-col items-center">
        <label style={{ textTransform: 'uppercase', color: '#ffffff', fontSize: '1rem', fontFamily: "'poppins',sans-serif" }}>{props.date}</label>
        <img src={props.img} className='w-[100%] md:w-[60%]' alt="Image Loading..." />
        <div className='flex flex-row  space-x-[1rem] items-center w-[50%] justify-around'>
          <Link href={props.insta}>
            <img className='h-[1.5rem] w-[1.5rem]' style={{ filter: 'invert(100%)' }} src='https://res.cloudinary.com/dhry5xscm/image/upload/v1693423373/insta-icon_c67fyq.svg' alt="icon-insta" />
          </Link>
          <Link href={props.fb}>
            <img className='h-[1.5rem] w-[1.5rem]' style={{ filter: 'invert(100%)' }} src='https://res.cloudinary.com/dhry5xscm/image/upload/v1693423373/fb-icon_kxvlqt.svg' alt='facebook link' />
          </Link>
          <Link href={props.linkedin}>
            <img className='h-[1.5rem] w-[1.5rem]' style={{ filter: 'invert(100%)' }} src='https://res.cloudinary.com/dhry5xscm/image/upload/v1693423373/linkedin-icon_qrekzz.svg' alt="icon-linkedin" />
          </Link>
        </div>
      </div>
      <div className='rounded-[1.25rem] w-[100%] p-[0.5rem] lg:w-[50%]' style={{
        backgroundColor: 'rgba(236, 247, 248, 0.40)'
      }}>
        <h1 className='font-["roboto"] text-[#33322E] text-[1.5rem] lg:text-[2.5rem]' style={{ fontFamily: "'roboto',sans-serif", fontWeight: '600' }}>{props.heading}</h1>
        <p className='w-[80%] text-[0.7rem] lg:text-[1rem]' style={{ textAlign: 'justify', marginTop: '1rem', margin: '0 auto', color: 'rgba(61, 71, 72, 0.80)', fontFamily: "'poppins',sans-serif" }}>{props.desc}</p>
      </div >
    </div >
  )
}

export default FeedCard
