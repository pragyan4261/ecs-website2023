import React from 'react'
import { Link } from 'react-router-dom';
const FeedCard = (props) => {
  return (
    <div className='flex flex-row justify-around md:w-[75%] sm:w-[80%] p-[1.25rem] rounded-[3.75rem] m-[3rem]' style={{ boxShadow: '0px 4px 36px 0px rgba(61, 69, 70, 0.50)', backgroundColor: 'rgba(236, 247, 248, 0.40)' }}>
      <div className="flex flex-col items-center">
        <label style={{ textTransform: 'uppercase', color: '#ffffff', fontSize: '1rem', fontFamily: "'poppins',sans-serif" }}>{props.date}</label>
        <img src={props.img} alt="Loading..."/>
        <div className='flex flex-row items-center w-[50%] justify-around'>
          <Link href={props.insta}>
            <img className='h-10 w-10' style={{ filter: 'invert(100%)' }} src='https://res.cloudinary.com/dhry5xscm/image/upload/v1693423373/insta-icon_c67fyq.svg' alt="icon-insta" />
          </Link>
          <Link href={props.fb}>
            <img className='h-8 w-8' style={{ filter: 'invert(100%)' }} src='https://res.cloudinary.com/dhry5xscm/image/upload/v1693423373/fb-icon_kxvlqt.svg' alt='facebook link' />
          </Link>
          <Link href={props.linkedin}>
            <img className='h-10 w-10' style={{ filter: 'invert(100%)' }} src='https://res.cloudinary.com/dhry5xscm/image/upload/v1693423373/linkedin-icon_qrekzz.svg' alt="icon-linkedin" />
          </Link>
        </div>
      </div>
      <div className='rounded-[1.25rem] w-[50%]' style={{
        backgroundColor: 'rgba(236, 247, 248, 0.40)'
      }}>
        <h1 className='font-["roboto"] text-[#33322E]' style={{ fontSize: '1.875rem', fontFamily: "'roboto',sans-serif", fontWeight: '600' }}>{props.heading}</h1>
        <p className='w-[80%]' style={{ textAlign: 'justify', marginTop: '1rem', margin: '0 auto', color: 'rgba(61, 71, 72, 0.80)', fontFamily: "'poppins',sans-serif", fontSize: '1rem' }}>{props.desc}</p>
      </div >
    </div >
  )
}

export default FeedCard