import React from 'react'
import PersonCard from '../cards/PersonCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Members = () => {
  const ecs_heads = [{
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
  const domain_heads = [{
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

  const junior_members = [
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
    <div className='flex flex-col'>
      <Navbar home='inactive' events='inactive' developers='inactive' about='inactive' feed='inactive' members='active' />
      <div className='flex flex-wrap justify-around items-center'>
        {ecs_heads.map((item) => <PersonCard name={item.name} img={item.img} designation={item.designation} fb={item.fb} insta={item.insta} linkedin={item.linkedin} />)}
      </div>
      <h1 className='text-[2rem] text-[#ffffff]'>SENIOR MEMBERS</h1>
      <div className='flex flex-wrap justify-around items-center'>
        {domain_heads.map((item) => <PersonCard name={item.name} img={item.img} designation={item.designation} fb={item.fb} insta={item.insta} linkedin={item.linkedin} />)}
      </div>
      <h1 className='text-[2rem] text-[#ffffff]'>JUNIOR MEMBERS</h1>
      <div className='flex flex-wrap justify-around items-center'>
        {junior_members.map((item) => <PersonCard name={item.name} img={item.img} designation={item.designation} fb={item.fb} insta={item.insta} linkedin={item.linkedin} />)}
      </div>
      <Footer />
    </div>
  )
}

export default Members
