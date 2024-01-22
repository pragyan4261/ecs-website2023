import React, { useState } from 'react';
import './Card.css';


const Card = (props) => {
  const [answer, setAnswer] = useState('');

  const handleInputChange = (event) => {
    setAnswer(event.target.value);
    props.setInit(event.target.value);
  };

  return (
    <div className="card space-y-5 ">
      <h2 className='text-sm lg:text-lg mb-3  leading-2' style={{fontFamily: 'Quicksand, sans-serif'}}>{props.question}</h2>
      {props.audio!=="" && 
      <audio controls className='m-auto'>
          <source src={props.audio}  type="audio/mpeg" />
        </audio>}
      {
        props.image!=="" && 
        <img src={props.image} className='w-[9rem] h-[9rem] sm:w-[15rem] sm:h-[15rem]' style={{margin:'0 auto'}} alt="loading..." />
      }
      <input
        type="text"
        value={props.init}
        onChange={handleInputChange}
        placeholder="Type answer"
        id="answerBox"
        autoComplete='off'
        className='h-6 sm:h-10 w-52 md:w-96 p-3 rounded-md outline-none text-black'
      />
    </div>
  );
};

export default Card;


