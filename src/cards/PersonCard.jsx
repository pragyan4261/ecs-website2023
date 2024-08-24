import React from 'react'
import { Link } from 'react-router-dom';
import './personCards.css'


const PersonCard = (props) => {
  return (
    <div className="card">
    <img src={props.img} alt="Card Pic" className="card-image" />
    <h1 className="card-heading">{props.name}</h1>
    <h2 className="card-subheading">{props.designation}</h2>
    <div className="card-links">
      <Link to={props.fb} target='_blank'><img className='h-[1.5rem] w-[1.5rem] scale-1 hover:scale-[1.2]' style={{ filter: 'invert(0%)' }} src='https://res.cloudinary.com/dhry5xscm/image/upload/v1693423373/fb-icon_kxvlqt.svg' alt="Facebook Handle" /></Link>

      <Link to={props.linkedin} traget='_blank'><img className='h-[1.5rem] w-[1.5rem] scale-1 hover:scale-[1.2]' style={{ filter: 'invert(0%)' }} src='https://res.cloudinary.com/dhry5xscm/image/upload/v1693423373/linkedin-icon_qrekzz.svg' alt="Linkedin Handle" /></Link>
    </div>
</div>

  )
}

export default PersonCard;
