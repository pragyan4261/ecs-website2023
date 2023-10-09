import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PersonCard from '../cards/PersonCard';
const Developers = () => {
  const developers = [{
    img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1693600068/alumni_jidxwm.svg',
    name: 'Person',
    designation: 'designation',
    fb: '',
    insta: '',
    linkedin: ''
  },
  {
    img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1693600068/alumni_jidxwm.svg',
    name: 'Person',
    designation: 'designation',
    fb: '',
    insta: '',
    linkedin: ''
  },
  {
    img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1693600068/alumni_jidxwm.svg',
    name: 'Person',
    designation: 'designation',
    fb: '',
    insta: '',
    linkedin: ''
  },
  {
    img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1693600068/alumni_jidxwm.svg',
    name: 'Person',
    designation: 'designation',
    fb: '',
    insta: '',
    linkedin: ''
  }
  ];
  return (
    <div>
      <Navbar />
      <h1 className='text-[2rem] text-[#ffffff] uppercase'>Developers</h1>
      <div className='flex flex-wrap justify-around items-center'>
        {developers.map((item) => <PersonCard name={item.name} img={item.img} designation={item.designation} fb={item.fb} insta={item.insta} linkedin={item.linkedin} />)}
      </div>
      <Footer />
    </div>
  )
}

export default Developers
