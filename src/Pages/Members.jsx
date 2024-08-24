import React from 'react'
import PersonCard from '../cards/PersonCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './members.css';

const Members = () => {
  const ecs_heads = [{
    img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1701891378/IMG-20231110-WA0085_jvzm0j.jpg',
    name: 'Aryadeep Gogoi',
    designation: 'President',
    fb: 'https://www.facebook.com/profile.php?id=100076109862434',
    insta: '',
    linkedin: 'https://www.linkedin.com/in/aryadeep-gogoi-696609236'
  },
  {
    img: 'https://res.cloudinary.com/dcwqsevti/image/upload/v1694601617/ECS%20PHoto%20members/ananya.jpg',
    name: 'Ananya Chetia',
    designation: 'Vice President',
    fb: 'https://www.facebook.com/ananya.chetia.10',
    insta: '',
    linkedin: "https://www.linkedin.com/mwlite/in/ananya-chetia-a06ab6223"
  }
  ];
  const domain_heads = [{
    img: 'https://res.cloudinary.com/dcwqsevti/image/upload/v1694601618/ECS%20PHoto%20members/chetan.jpg',
    name: 'Chetan Singh',
    designation: 'General Secretary',
    fb: 'https://www.facebook.com/profile.php?id=100088154563057&mibextid=ZbWKwL',
    insta: '',
    linkedin: 'https://www.linkedin.com/in/chetan-singh-536ba3290'
  },
  {
    img: 'https://res.cloudinary.com/dxdxzcn0q/image/upload/v1694782013/IMG_20230915_180728_xvo6iu.jpg',
    name: 'Priyam Sogani',
    designation: 'Treasurer',
    fb: 'https://www.facebook.com/profile.php?id=100087907306149',
    insta: '',
    linkedin: 'https://www.linkedin.com/in/priyam-sogani-bb0b51257/'
  },
  {
    img: 'https://res.cloudinary.com/dcwqsevti/image/upload/v1694601618/ECS%20PHoto%20members/tripti.jpg',
    name: 'Tripti Golcha',
    designation: 'Literary and PR Head',
    fb: 'https://www.facebook.com/tripti.golchha.1/',
    insta: '',
    linkedin: 'https://www.linkedin.com/in/tripti-golchha-b7066818b/'
  },
  {
    img: 'https://res.cloudinary.com/dcwqsevti/image/upload/v1694601616/ECS%20PHoto%20members/parismita.jpg',
    name: 'Parismita Malakar',
    designation: 'Media & Graphics Head',
    fb: 'https://www.facebook.com/pari.malakar.900?mibextid=cejktS',
    insta: '',
    linkedin: 'https://www.linkedin.com/in/parismita-malakar-844b93256'
  },
  {
    img: 'https://res.cloudinary.com/dcwqsevti/image/upload/v1694601616/ECS%20PHoto%20members/pragyan.jpg',
    name: 'Pragyan Das',
    designation: 'Technical Head',
    fb: 'https://www.facebook.com/profile.php?id=100087648530022&mibextid=2JQ9oc',
    insta: '',
    linkedin: 'https://www.linkedin.com/in/pragyan-das-197086255'
  },
  {
    img: 'https://res.cloudinary.com/dcwqsevti/image/upload/v1694601615/ECS%20PHoto%20members/jagat.jpg',
    name: 'Jagatjyoti Deb',
    designation: 'Senior Executive',
    fb: 'https://www.facebook.com/profile.php?id=100084536361943',
    insta: '',
    linkedin: 'https://www.linkedin.com/in/jagatjyoti-deb-0a57bb223/'
  },
  {
    img: 'https://res.cloudinary.com/dcwqsevti/image/upload/v1694601614/ECS%20PHoto%20members/aditi.jpg',
    name: 'Aditi Goel',
    designation: 'Senior Executive',
    fb: 'https://www.facebook.com/profile.php?id=100087668176529&mibextid=LQQJ4d',
    insta: '',
    linkedin: 'https://www.linkedin.com/in/aditi-goel-b87b95256'
  }
  ];

  const junior_members = [
    {
      img: 'https://res.cloudinary.com/dkquqobzd/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1724183274/IMG20231216143302_-_Dubari_Kalita_sz6e77.jpg',
      name: 'Dubari Kalita',
      designation: 'Junior Executive Member',
      fb: 'https://www.facebook.com/profile.php?id=61550330563887&mibextid=ZbWKwL ',
      insta: 'https://www.instagram.com/dubari_.k._?igsh=MXBrZHM1NG52ZXNrZg==',
      linkedin: 'https://www.linkedin.com/in/dubari-kalita-6234a4289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
      img: 'https://res.cloudinary.com/dkquqobzd/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1724184727/me_-_RAVI_NAYAN_iegexl.jpg',
      name: 'Ravi Nayan',
      designation: 'Junior Executive Member',
      fb: 'https://www.facebook.com/profile.php?id=100090258056576&mibextid=ZbWKwL ',
      insta: '',
      linkedin: 'https://www.linkedin.com/in/ravinayan'
    },
    {
      img: 'https://res.cloudinary.com/dkquqobzd/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1724184886/IMG-20240616-WA0013_-_Aditya_Sharma_g5thzq.webp',
      name: 'Aditya Sharma',
      designation: 'Junior Executive Member',
      fb: 'https://www.facebook.com/share/9onhMhQg3yAjARRM/?mibextid=qi2Omg ',
      insta: '',
      linkedin: 'https://www.linkedin.com/in/aditya-sharma-1a96912a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
      img: 'https://res.cloudinary.com/dkquqobzd/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1724185499/Untitled_design_20231222_235714_0000_-_Sai_Smaran_Aare_arj5tm.png',
      name: 'Sai Smaran Are',
      designation: 'Junior Executive Member',
      fb: 'https://www.facebook.com/profile.php?id=61550270799193 ',
      insta: '',
      linkedin: 'https://www.linkedin.com/in/sai-smaran-aare-91b49328a'
    },
    {
      img: 'https://res.cloudinary.com/dkquqobzd/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1724184887/IMG-20240819-WA0135_-_KOUSTUBH_MISHRA_cx345y.jpg',
      name: 'Koustubh Mishra',
      designation: 'Junior Literary Member',
      fb: 'https://www.facebook.com/profile.php?id=61550954022733&mibextid=ZbWKwL',
      insta: 'https://www.instagram.com/mishra.koustubh?igsh=czAwZnloYXdwejdj',
      linkedin: ' https://www.linkedin.com/in/koustubh-mishra-37147728a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
      img: 'https://res.cloudinary.com/dkquqobzd/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1724185503/IMG20240226103237_-_Namrata_Nayak_afqb1y.jpg',
      name: 'Namrata Nayak',
      designation: 'Junior Literary Member',
      fb: 'https://www.facebook.com/profile.php?id=61550582139664&mibextid=ZbWKwL ',
      insta: 'https://www.instagram.com/nayak__namrata?igsh=MTl6dTFsZTE1cHdqZw==',
      linkedin: 'https://www.linkedin.com/in/namrata-nayak-43b09b2ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
      img: 'https://res.cloudinary.com/dkquqobzd/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1724184190/IMG_E5286_Original_-_Bhabana_Das_agcnkw.jpg',
      name: 'Bhabana Das',
      designation: 'Junior Literary Member',
      fb: 'https://www.facebook.com/bhabana.das.520?mibextid=LQQJ4d ',
      insta: 'https://www.instagram.com/bhavvvnaaa?igsh=MTJrMXVqbTV2OHh0cg==',
      linkedin: ' http://linkedin.com/in/bhavvvnaaa'
    },
    {
      img: 'https://res.cloudinary.com/dkquqobzd/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1724185480/IMG_1317_-_Anwesh_Saha_nuewhc.jpg',
      name: 'Anwesh Saha',
      designation: 'Junior Literary Member',
      fb: 'https://www.facebook.com/profile.php?id=61550052082806&mibextid=LQQJ4d ',
      insta: '',
      linkedin: 'https://www.linkedin.com/in/anwesh-saha-8391972b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
    },
    {
      img: 'https://res.cloudinary.com/dkquqobzd/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1724185452/me2_-_Indranuj_Dev_wncjuu.jpg',
      name: 'Indranuj Dev',
      designation: 'Junior Design Member',
      fb: 'https://www.facebook.com/profile.php?id=100093701234558&mibextid=ZbWKwL ',
      insta: 'https://www.instagram.com/indranuj_dev?igsh=MXhua25jeG5uMWhlbg==',
      linkedin: 'https://www.linkedin.com/in/indranuj-dev-b45366202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
      img: 'https://res.cloudinary.com/dkquqobzd/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1724184086/IMG_1570_-_Rajdeep_Sarmah_fpockn.jpg',
      name: 'Rajdeep Sarmah',
      designation: 'Junior Design Member',
      fb: 'https://www.facebook.com/profile.php?id=61550707497082&mibextid=ZbWKwL ',
      insta: 'https://www.instagram.com/raj_d21?igsh=MXQ0Ymk4dnE0azNrNA==',
      linkedin: 'https://www.linkedin.com/in/rajdeep-sarmah-09a570275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
      img: 'https://res.cloudinary.com/dkquqobzd/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1724184887/IMG-20240226-WA0023_-_KASISH_SAHU_ju5e6g.jpg',
      name: 'Kashish Sahu',
      designation: 'Junior Design Member',
      fb: 'https://www.facebook.com/profile.php?id=100085049243095 ',
      insta: ' https://www.instagram.com/kasishsahu10?igsh=bmZ4Zm02NGk3bW10',
      linkedin: 'https://www.linkedin.com/in/kasish-sahu-94154028a'
    },
    {
      img: 'https://res.cloudinary.com/dkquqobzd/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1724350649/IMG-20240819-WA0023_-_manisha_wl4zpe.jpg',
      name: 'Manisha Saloi',
      designation: 'Junior Design Member',
      fb: 'https://www.facebook.com/profile.php?id=61550675969308&mibextid=ZbWKwL ',
      insta: 'https://www.instagram.com/manisha_saloi?igsh=MnNrbjg2bjU0bHBp',
      linkedin: 'https://www.linkedin.com/in/manisha-saloi-aa564228a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
      img: 'https://res.cloudinary.com/dkquqobzd/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1724264897/IMG_20240803_213303_-_Jitamanyu_Phukan_fch9xk.jpg',
      name: 'Jitamanyu Phukan',
      designation: 'Junior Design Member',
      fb: 'https://www.facebook.com/profile.php?id=100070630387563 ',
      insta: 'https://www.instagram.com/sillycon321?igsh=cHc2ZnozdGlpMTdu',
      linkedin: 'https://www.linkedin.com/in/jitamanyu-phukan-562728280'
    },
    {
      img: 'https://res.cloudinary.com/dkquqobzd/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1724352670/WhatsApp_Image_2024-08-23_at_00.20.11_0f5ee973_j4sidy.jpg ',
      name: 'Deepanshu Sharma',
      designation: 'Junior Technical Member',
      fb: ' https://www.facebook.com/cb.sharma.3304/ ',
      insta: 'https://www.instagram.com/_dsharmaa',
      linkedin: 'https://www.linkedin.com/in/deepanshu-sharma-b3a46828a/'
    },
    {
      img: 'https://res.cloudinary.com/dkquqobzd/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1724184297/Photo_hhrzbd.jpg',
      name:'Shashwat Patel',
      designation: 'Junior Technical Member',
      fb: 'https://www.facebook.com/profile.php?id=61550363986087 ',
      insta: 'https://www.instagram.com/belie.ver79/',
      linkedin: 'https://www.linkedin.com/in/shashwat-patel-5b8a67279?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bfik4FtkKQ6ma9%2BzuASfbMw%3D%3D'
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
      img: 'https://res.cloudinary.com/dkquqobzd/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1724185484/Sibajit_-_SIBAJIT_MAZUMDER_iqy8ky.jpg',
      name: 'Sibajit Mazumder',
      designation: 'Junior Technical Member',
      fb: 'https://www.facebook.com/profile.php?id=61550651010065&mibextid=ZbWKwL ',
      insta: ' https://www.instagram.com/siibajit_maz.808/',
      linkedin: 'www.linkedin.com/in/sibajit-mazumder'
    },
    {
      img: 'https://res.cloudinary.com/dkquqobzd/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1724185452/Profile_-_Subrata_Lodh_qx1wdq.jpg',
      name: 'Subrata Lodh',
      designation: 'Junior Technical Member',
      fb: 'https://www.facebook.com/profile.php?id=100088421967870&mibextid=ZbWKwL ',
      insta: '',
      linkedin: 'https://www.linkedin.com/in/subrata-lodh-45541328a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    }

  ];
  return (
    <div className='container flex flex-col'>
      <Navbar home='inactive' events='inactive' developers='inactive' about='inactive' feed='inactive' members='active' />

      <div className='flex flex-wrap justify-around items-center mt-7'>
        {ecs_heads.map((item) => <PersonCard name={item.name} img={item.img} designation={item.designation} fb={item.fb} insta={item.insta} linkedin={item.linkedin} />)}
      </div>


      <h1 className='senior text-[2rem] text-[#ffffff]'>
        SENIOR MEMBERS
      </h1>

      <div className='flex flex-wrap justify-around items-center'>
        {domain_heads.map((item) => <PersonCard name={item.name} img={item.img} designation={item.designation} fb={item.fb} insta={item.insta} linkedin={item.linkedin} />)}
      </div>


      <h1 className='junior text-[2rem] text-[#ffffff]'>
        JUNIOR MEMBERS
      </h1>

      <div className='flex flex-wrap justify-around items-center'>
        {junior_members.map((item) => <PersonCard name={item.name} img={item.img} designation={item.designation} fb={item.fb} insta={item.insta} linkedin={item.linkedin} />)}
      </div>
      
      <Footer />
    </div>
  )
}

export default Members
