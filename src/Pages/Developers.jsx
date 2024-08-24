import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PersonCard from '../cards/PersonCard';
const Developers = () => {
  const developers = [   
    {
      img: 'https://res.cloudinary.com/dkquqobzd/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1724352670/WhatsApp_Image_2024-08-23_at_00.20.11_0f5ee973_j4sidy.jpg',
      name: 'Deepanshu Sharma',
      designation: 'Junior Technical Member',
      fb: ' https://www.facebook.com/cb.sharma.3304/ ',
      insta: 'https://www.instagram.com/_dsharmaa',
      linkedin: 'https://www.linkedin.com/in/deepanshu-sharma-b3a46828a/'
    }, 
  {
    img: 'https://res.cloudinary.com/dkquqobzd/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1724185451/Pf_2.1_-_Nikhil_Singh_wsjbev.jpg',
    name: 'Nikhil Singh',
    designation: 'Junior Technical Member',
    fb: 'https://www.facebook.com/profile.php?id=61550344304871',
    insta: 'https://www.instagram.com/nikhil_singh2206/',
    linkedin: 'https://www.linkedin.com/in/nikhilsinghparashar/'
  },
  {
    img: 'https://res.cloudinary.com/dkquqobzd/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1724185452/Profile_-_Subrata_Lodh_qx1wdq.jpg',
    name: 'Subrata Lodh',
    designation: 'Junior Technical Member',
    fb: 'https://www.facebook.com/profile.php?id=100088421967870&mibextid=ZbWKwL ',
    insta: '',
    linkedin: 'https://www.linkedin.com/in/subrata-lodh-45541328a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  },
  {
    img: 'https://res.cloudinary.com/dkquqobzd/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1724185484/Sibajit_-_SIBAJIT_MAZUMDER_iqy8ky.jpg',
    name: 'Sibajit Mazumder',
    designation: 'Junior Technical Member',
    fb: 'https://www.facebook.com/profile.php?id=61550651010065&mibextid=ZbWKwL ',
    insta: ' https://www.instagram.com/siibajit_maz.808/',
    linkedin: 'www.linkedin.com/in/sibajit-mazumder'
  },
  {
    img: 'https://res.cloudinary.com/dkquqobzd/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1724184297/Photo_hhrzbd.jpg',
    name:'Shashwat Patel',
    designation: 'Junior Technical Member',
    fb: 'https://www.facebook.com/profile.php?id=61550363986087 ',
    insta: 'https://www.instagram.com/belie.ver79/',
    linkedin: 'https://www.linkedin.com/in/shashwat-patel-5b8a67279?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bfik4FtkKQ6ma9%2BzuASfbMw%3D%3D'
  },
  ];
  return (
    <div className='container'>
      <Navbar />
      <h1 className='text-[2rem] mt-20 text-[#ffffff] uppercase'>Developers</h1>
      <div className='flex flex-row justify-center align-center'><PersonCard name="Pragyan Das" img='https://res.cloudinary.com/dcwqsevti/image/upload/v1694601616/ECS%20PHoto%20members/pragyan.jpg' designation="Technical Head" fb="https://www.facebook.com/profile.php?id=100087648530022&mibextid=2JQ9oc" insta="" linkedin="https://www.linkedin.com/in/pragyan-das-197086255" /></div>
      <div className='flex flex-wrap justify-around items-center'>
        {developers.map((item) => <PersonCard name={item.name} img={item.img} designation={item.designation} fb={item.fb} insta={item.insta} linkedin={item.linkedin} />)}
      </div>
      <Footer />
    </div>
  )
}

export default Developers
