import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PersonCard from '../cards/PersonCard';
const Developers = () => {
  const developers = [{
    img: 'https://res.cloudinary.com/dcwqsevti/image/upload/v1694601618/ECS%20PHoto%20members/barnil.jpg',
    name: 'Barnil Sarma',
    designation: 'Junior Technical Member',
    fb: 'https://m.facebook.com/profile.php/?id=100056956539956&name=xhp_nt__fb__action__open_user',
    insta: '',
    linkedin: 'https://www.linkedin.com/in/barnil-sarma-34383a255/'
  },
  {
    img: 'https://res.cloudinary.com/dcwqsevti/image/upload/v1694601616/ECS%20PHoto%20members/pragyan.jpg',
    name: 'Pragyan Das',
    designation: 'Junior Technical Member',
    fb: 'https://www.facebook.com/profile.php?id=100087648530022&mibextid=2JQ9oc',
    insta: '',
    linkedin: 'https://www.linkedin.com/in/pragyan-das-197086255'
  },
  {
    img: 'https://res.cloudinary.com/dxdxzcn0q/image/upload/v1694782694/IMG_20230915_182739_pwyd26.jpg',
    name: 'Garvit Khare',
    designation: 'Junior Technical Member',
    fb: 'https://www.facebook.com/profile.php?id=100087643579805&mibextid=ZbWKwL',
    insta: '',
    linkedin: 'https://www.linkedin.com/in/garvit-khare-2297a924b'
  },
  {
    img: 'https://res.cloudinary.com/dcwqsevti/image/upload/v1694601615/ECS%20PHoto%20members/jagat.jpg',
    name: 'Jagatjyoti Deb',
    designation: 'Junior Technical Member',
    fb: 'https://www.facebook.com/profile.php?id=100084536361943',
    insta: '',
    linkedin: 'https://www.linkedin.com/in/jagatjyoti-deb-0a57bb223/'
  }
  ];
  return (
    <div>
      <Navbar />
      <h1 className='text-[2rem] mt-20 text-[#ffffff] uppercase'>Developers</h1>
      <div className='flex flex-row justify-center align-center'><PersonCard name="ROHAN JHA" img='https://res.cloudinary.com/dcwqsevti/image/upload/v1694601618/ECS%20PHoto%20members/rohan.jpg' designation="Technical Head" fb="https://www.facebook.com/profile.php?id=100010061770737" insta="" linkedin="https://www.linkedin.com/in/rohan-jha-ab635322b/" /></div>
      <div className='flex flex-wrap justify-around items-center'>
        {developers.map((item) => <PersonCard name={item.name} img={item.img} designation={item.designation} fb={item.fb} insta={item.insta} linkedin={item.linkedin} />)}
      </div>
      <Footer />
    </div>
  )
}

export default Developers
