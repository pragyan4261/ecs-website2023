import React from 'react'
import { Link } from 'react-router-dom';
const PersonCard = (props) => {
  return (
    <div className='m-[3.5rem] p-[2rem] flex flex-col items-center'>
      <div style={{ position: 'relative', top: '1rem', zIndex: '2' }}>
        <img src={props.img} alt='' className='h-[10rem] w-[10rem] relative top-3 rounded-full' style={{ objectFit: 'cover' }} />
      </div>
      <div className='flex flex-col h-28 pt-5 space-y-1 w-36 relative top-5' style={{ scale: '2', textTranform: 'uppercase', backgroundColor: 'rgba(255, 255, 255, 0.45)', border: '0px solid transparent', borderRadius: '1.5rem', }}>
        <h1 className='text-[0.5rem]' style={{ marginTop: '1rem', textTransform: 'uppercase', color: '#33322E', fontWeight: '600', fontFamily: '"poppins",sans-serif' }}>{props.name}</h1>
        <h2 className='text-[0.45rem]' style={{ textTransform: 'uppercase', color: '#33322E', fontWeight: '400', fontFamily: '"poppins",sans-serif' }}>{props.designation}</h2>
        <div className='flex flex-row justify-evenly pt-2 items-center'>
          {/* <Link to={props.insta} target='_blank'><img className='h-[1rem] w-[1rem]' style={{ filter: 'invert(0%)' }} src='https://res.cloudinary.com/dhry5xscm/image/upload/v1693423373/insta-icon_c67fyq.svg' alt="Instagram Handle" /></Link> */}
          <Link to={props.fb} target='_blank'><img className='h-[1rem] w-[1rem] scale-1 hover:scale-[1.2]' style={{ filter: 'invert(0%)' }} src='https://res.cloudinary.com/dhry5xscm/image/upload/v1693423373/fb-icon_kxvlqt.svg' alt="Facebook Handle" /></Link>
          <Link to={props.linkedin} traget='_blank'><img className='h-[1rem] w-[1rem] scale-1 hover:scale-[1.2]' style={{ filter: 'invert(0%)' }} src='https://res.cloudinary.com/dhry5xscm/image/upload/v1693423373/linkedin-icon_qrekzz.svg' alt="Linkedin Handle" /></Link>
        </div>
      </div>
    </div>
  )
}

export default PersonCard;
