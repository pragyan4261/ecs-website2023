import React from 'react'
import PersonCard from '../cards/PersonCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Members = () => {
  const ecs_heads = [{
    img: 'https://res.cloudinary.com/dcwqsevti/image/upload/v1694601616/ECS%20PHoto%20members/nistha.jpg',
    name: 'Nistha Baruah',
    designation: 'President',
    fb: "https://www.facebook.com/nistha.baruah.58",
    insta: "",
    linkedin: 'https://www.linkedin.com/in/nistha-baruah-201abb212/'
  },
  {
    img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1701965731/ecs-website/aaryan-img_mbgrnj.jpg',
    name: 'Aaryan',
    designation: 'Vice President',
    fb: 'https://www.facebook.com/profile.php?id=100015547038499',
    insta: '',
    linkedin: 'https://www.linkedin.com/in/aaryan4200/'
  }
  ];
  const domain_heads = [{
    img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1701891378/IMG-20231110-WA0085_jvzm0j.jpg',
    name: 'Aryadeep Gogoi',
    designation: 'General Secretary',
    fb: 'https://www.facebook.com/profile.php?id=100076109862434',
    insta: '',
    linkedin: 'https://www.linkedin.com/in/aryadeep-gogoi-696609236'
  },
  {
    img: 'https://res.cloudinary.com/dcwqsevti/image/upload/v1694601617/ECS%20PHoto%20members/vishnu.jpg',
    name: 'Vishnu Padmakumar',
    designation: 'Treasurer',
    fb: 'https://www.facebook.com/profile.php?id=100075797247014&mibextid=ZbWKwL',
    insta: '',
    linkedin: 'https://www.linkedin.com/in/vishnu-padmakumar-8515ba22a'
  },
  {
    img: 'https://res.cloudinary.com/dcwqsevti/image/upload/v1694601617/ECS%20PHoto%20members/ananya.jpg',
    name: 'Ananya Chetia',
    designation: 'Literary & PR Head',
    fb: 'https://www.facebook.com/ananya.chetia.10',
    insta: '',
    linkedin: "https://www.linkedin.com/mwlite/in/ananya-chetia-a06ab6223"
  },
  {
    img: 'https://res.cloudinary.com/dcwqsevti/image/upload/v1694603904/ECS%20PHoto%20members/priyambada.jpg',
    name: 'Priyambada Hazarika',
    designation: 'Media & Graphics Head',
    fb: 'https://www.facebook.com/profile.php?id=100076411391244',
    insta: '',
    linkedin: 'https://www.linkedin.com/in/priyambada-hazarika-423237241'
  },
  {
    img: 'https://res.cloudinary.com/dcwqsevti/image/upload/v1694601618/ECS%20PHoto%20members/rohan.jpg',
    name: 'Rohan Jha',
    designation: 'Technical Head',
    fb: 'https://www.facebook.com/profile.php?id=100010061770737',
    insta: '',
    linkedin: 'https://www.linkedin.com/in/rohan-jha-ab635322b/'
  },
  {
    img: 'https://res.cloudinary.com/dxdxzcn0q/image/upload/v1694782012/IMG_20230915_180847_wcdcli.jpg',
    name: 'Amarjeet Kumar Chaurasia',
    designation: 'Senior Executive',
    fb: 'https://www.facebook.com/profile.php?id=100023668245841',
    insta: 'http://linkedin.com/in/amarjeet-kr-chaurasia-72a6b9185',
    linkedin: ''
  },
  {
    img: 'https://res.cloudinary.com/dcwqsevti/image/upload/v1694601617/ECS%20PHoto%20members/vishnu.jpg',
    name: 'Vansh Kumar Poddar',
    designation: 'Senior Executive',
    fb: 'https://www.facebook.com/profile.php?id=100073130336199',
    insta: '',
    linkedin: ''
  }
  ];

  const junior_members = [
    {
      img: 'https://res.cloudinary.com/dcwqsevti/image/upload/v1694601615/ECS%20PHoto%20members/satyam.jpg',
      name: 'Satyam Das',
      designation: 'Junior Executive Member',
      fb: 'https://www.facebook.com/profile.php?id=100088016045181&mibextid=nW3QTL',
      insta: '',
      linkedin: 'https://www.linkedin.com/in/satyam-das-695641254?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BBxDpoIsbRSiZxo%2FuoDtAjw%3D%3D'
    },
    {
      img: 'https://res.cloudinary.com/dcwqsevti/image/upload/v1694601616/ECS%20PHoto%20members/abhipsa.jpg',
      name: 'Abhipsa Banik',
      designation: 'Junior Executive Member',
      fb: 'https://www.facebook.com/profile.php?id=100088085625739&mibextid=ZbWKwL',
      insta: '',
      linkedin: 'https://www.linkedin.com/in/abhipsa-banik-5a0818289/'
    },
    {
      img: 'https://res.cloudinary.com/dxdxzcn0q/image/upload/v1694782012/IMG_20230915_180923_n2uftd.jpg',
      name: 'Abhiroop Bahera',
      designation: 'Junior Executive Member',
      fb: 'https://www.facebook.com/profile.php?id=100087457613584',
      insta: '',
      linkedin: 'https://www.linkedin.com/in/abhiroop-behera-8200b2257'
    },
    {
      img: 'https://res.cloudinary.com/dxdxzcn0q/image/upload/v1694782013/IMG_20230915_180728_xvo6iu.jpg',
      name: 'Priyam Sogani',
      designation: 'Junior Executive Member',
      fb: 'https://www.facebook.com/profile.php?id=100087907306149',
      insta: '',
      linkedin: 'https://www.linkedin.com/in/priyam-sogani-bb0b51257/'
    },
    {
      img: 'https://res.cloudinary.com/dcwqsevti/image/upload/v1694601617/ECS%20PHoto%20members/annesha.jpg',
      name: 'Annesha Dey',
      designation: 'Junior Literary Member',
      fb: 'https://www.facebook.com/profile.php?id=100086242394866',
      insta: '',
      linkedin: 'https://www.linkedin.com/in/annesha-dey-51bb80254/'
    },
    {
      img: 'https://res.cloudinary.com/dcwqsevti/image/upload/v1694601618/ECS%20PHoto%20members/chetan.jpg',
      name: 'Chetan Singh',
      designation: 'Junior Literary Member',
      fb: 'https://www.facebook.com/profile.php?id=100088154563057&mibextid=ZbWKwL',
      insta: '',
      linkedin: 'https://www.linkedin.com/in/chetan-singh-536ba3290'
    },
    {
      img: 'https://res.cloudinary.com/dcwqsevti/image/upload/v1694601617/ECS%20PHoto%20members/PallavSharmaCrpd3_shnygq.jpg',
      name: 'Pallav Sharma',
      designation: 'Junior Literary Member',
      fb: 'https://www.facebook.com/profile.php?id=100088107152732',
      insta: '',
      linkedin: 'https://www.linkedin.com/in/pallav-sharma-68174424b/'
    },
    {
      img: 'https://res.cloudinary.com/dcwqsevti/image/upload/v1694601618/ECS%20PHoto%20members/tripti.jpg',
      name: 'Tripti Golcha',
      designation: 'Junior Literary Member',
      fb: 'https://www.facebook.com/tripti.golchha.1/',
      insta: '',
      linkedin: 'https://www.linkedin.com/in/tripti-golchha-b7066818b/'
    },
    {
      img: 'https://res.cloudinary.com/dcwqsevti/image/upload/v1694601615/ECS%20PHoto%20members/ijaj.jpg',
      name: 'Abdul Ijaj Ahmed',
      designation: 'Junior Design Member',
      fb: 'https://www.facebook.com/profile.php?id=100087576082808',
      insta: '',
      linkedin: 'https://www.linkedin.com/in/abdul-ijaj-ahmed-a7bab3257/'
    },
    {
      img: 'https://res.cloudinary.com/dcwqsevti/image/upload/v1694601614/ECS%20PHoto%20members/aditi.jpg',
      name: 'Aditi Goel',
      designation: 'Junior Design Member',
      fb: 'https://www.facebook.com/profile.php?id=100087668176529&mibextid=LQQJ4d',
      insta: '',
      linkedin: 'https://www.linkedin.com/in/aditi-goel-b87b95256'
    },
    {
      img: 'https://res.cloudinary.com/dcwqsevti/image/upload/v1694601616/ECS%20PHoto%20members/parismita.jpg',
      name: 'Parismita Malakar',
      designation: 'Junior Design Member',
      fb: 'https://www.facebook.com/pari.malakar.900?mibextid=cejktS',
      insta: '',
      linkedin: 'https://www.linkedin.com/in/parismita-malakar-844b93256'
    },
    {
      img: 'https://res.cloudinary.com/dxdxzcn0q/image/upload/v1694782301/SAVE_20230915_182104_ubjt8v.jpg',
      name: 'Jaruplavath Uday Karthik',
      designation: 'Junior Design Member',
      fb: 'https://www.facebook.com/jaruplavath.udaykarthik/',
      insta: '',
      linkedin: 'https://www.linkedin.com/in/jaruplavath-udaykarthik-175783253/'
    },
    {
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
