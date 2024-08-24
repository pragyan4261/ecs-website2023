import React from 'react'
import FeedCard from '../cards/FeedCard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const Feed = () => {
  const cards = [
    {
      date: 'date', img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1693422331/yoga_day_gakp7o.png', insta: '', fb: '', linkedin: '', heading: 'HEADING', desc: 'Horem ipsum dolor sit amet, consectetur adipiscing elit Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.'
    },
    {
      date: 'date', img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1693422331/yoga_day_gakp7o.png', insta: '', fb: '', linkedin: '', heading: 'HEADING', desc: 'Horem ipsum dolor sit amet, consectetur adipiscing elit Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.'
    },
    {
      date: 'date', img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1693422331/yoga_day_gakp7o.png', insta: '', fb: '', linkedin: '', heading: 'HEADING', desc: 'Horem ipsum dolor sit amet, consectetur adipiscing elit Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.'
    }
  ];
  return (
    <div>
      <Navbar home='inactive' events='inactive' developers='inactive' about='inactive' feed='active' members='inactive' />
      <div className='flex flex-col items-center justify-around' style={{ marginTop: '3rem' }}>
        {cards.map((item) => <FeedCard date={item.date} img={item.img} fb={item.fb} linkedin={item.linkedin} heading={item.heading} desc={item.desc} />)}
      </div>
      <Footer />
    </div>
  )
}

export default Feed;
