import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css'
// import 'swiper/css/navigation';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay'


const Messages = () => {
  const data = [{
    'name': 'Aryadeep Gogoi', 'designation': 'President', 'photo': 'https://res.cloudinary.com/dhry5xscm/image/upload/v1701891378/IMG-20231110-WA0085_jvzm0j.jpg',
    'message': `
      ECS is a thriving and efficient society at NIT Silchar. It is both an honour and a privilege to serve as the President of such an efficient society which is a thriving hub of innovation, creativity, and collaboration, where students from diverse backgrounds come together to explore their passions and expand their horizons. We at ECS strive to holistically develop all students in the department, both technically and non-technically. I urge all students to participate in the clubs and societies to gain valuable experiences and develop time management skills. With teamwork and cooperation, ECS has achieved great heights. We hope to continue our legacy and leave a positive impact on all students in our beloved department. ECE rocks!
`
  }, {
    'name': 'Ananya Chetia', 'designation': 'Vice President', 'photo': 'https://res.cloudinary.com/dcwqsevti/image/upload/v1694601617/ECS%20PHoto%20members/ananya.jpg',
    'message': `
      Serving as a member of the Electronics and Communication Society for the past three years has been a deeply rewarding experience. ECS has been at the forefront of encouraging our students to excel in all aspects—technical, academic, and artistic—through numerous initiatives and competitions. A big thank you to our web team for their exceptional work in maintaining our online presence. 
To the students of the ECE department, I extend my best wishes for your future endeavors. Remember, our collective efforts will lead us to greater heights. Let’s continue to work together for the advancement of our department.
ECS ROCKS!!
    `
  }, {
    'name': 'Chetan Singh Verma', 'designation': 'General Secretary', 'photo': 'https://res.cloudinary.com/dcwqsevti/image/upload/v1694601618/ECS%20PHoto%20members/chetan.jpg',
    'message': `
      As the General Secretary of ECS, I am honored to lead a society dedicated to fostering innovation, collaboration, and excellence in the field of electronics and communication. Our vision is to create a vibrant community where ideas flourish, knowledge is shared, and every member is empowered to reach their full potential. Together, we will strive to uplift our society by embracing new challenges, driving technological advancement, and making a lasting impact both within and beyond our campus. ECE rocks!!!
    `
  }, {
    'name': 'Dr. Wasim Arif', 'designation': 'Faculty Advisor', 'photo': 'https://res.cloudinary.com/dhry5xscm/image/upload/v1701965729/ecs-website/wasim-img_orgqul.jpg',
    'message': `
      In the spirit of continuous learning, we extend a warm welcome to all the students in our beloved institution. The alumni of this esteemed establishment have already made us proud of their achievements since graduation. I have every confidence that, just like our accomplished graduates, our present batches will have a memorable and successful journey here at NIT Silchar.
So, prepare yourself to be a valuable asset, the future eagerly anticipates Three things you should acquire as a student : Self- Motivation, Self- Regulation and Self- Confidence. Maintain a sense of joy and keep radiating your brilliance!
Life is beautiful, so embrace it.
    `
  },
  {
    'name': 'Dr. Koushik Guha', 'designation': 'HOD', 'photo': 'https://res.cloudinary.com/dyuggtbjl/image/upload/v1705432284/ecs/d9398f32-6399-4b54-84cb-d7ccb6ece3c4_b33ujf.jpg',
    'message': `
      Dear aspiring engineers, It is with great pleasure that I extend a warm welcome to you as the HOD of the Electronics and Communication Engineering Department. Our department is a thriving hub of innovation and exploration dedicated to nurturing the talents of tomorrow's technological leaders.I have full confidence that together we will push our boundaries, create solutions and excel in all expects inspiring a change among all. The future of Electronics and Communication Engineering rests in your capable hands, and I am excited to see the innovations and breakthroughs you will bring to the  world. Your future begins here!
    `
  }

  ];
  return (
    <>
      <h1 className='text-3xl text-[#ffffff] sm:text-5xl font-semibold'>Messages</h1>
      <Swiper pagination={{ dynamicBullets: true, clickable: true }} modules={[Pagination, Autoplay]} autoplay={{ delay: 2000 }} loop="true" className="mySwiper ">
        {data.map((item) =>
          <SwiperSlide data-swiper-autoplay="2000">
            <div className='w-full flex flex-col items-center pl-20 pr-20 space-y-7 text-white pt-5 pb-5'>
              <img src={item.photo} className='w-[1rem] h-[1rem]' />
              <p className='text-md max-w-screen-lg text-justify'>{item.message}</p>
              <div>
                <h1 className='text-2xl font-semibold drop-shadow-xl shadow-black'>{item.name}</h1>
                <p className='text-lg mb-5'>{item.designation}</p>
              </div>
            </div>
          </SwiperSlide>)}
        {/* <SwiperSlide data-swiper-autoplay="2000">
          <div className='w-full flex flex-col justify-center items-center pl-20 pr-20 space-y-7 text-white pt-5 pb-5'>
            <h1 className='text-3xl sm:text-5xl font-semibold'>Messages</h1>
            <div className='w-36 h-36 sm:w-48 sm:h-48 rounded-full bg-blue-500'></div>
            <p className='text-center text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempore ad, animi minus consequatur quisquam non libero molestias officia dolorem dignissimos? Sunt, cum, tempore architecto maiores asperiores eius consequatur necessitatibus atque ipsam blanditiis, iste quidem amet reiciendis rerum dicta expedita? Laboriosam consectetur saepe aliquam sequi unde magni alias laudantium id! Laudantium, odit. Velit neque officiis praesentium ab non illum repellat?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis dolor, possimus fuga ducimus exercitationem doloribus neque ipsam totam eos optio.</p>
            <div>
              <h1 className='text-2xl font-semibold'>Dr. Wasim Arif</h1>
              <p className='text-lg mb-5'>Faculty Advisor</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide data-swiper-autoplay="2000">
          <div className='w-full flex flex-col justify-center items-center pl-20 pr-20 space-y-7 text-white pt-5 pb-5'>
            <h1 className='text-3xl sm:text-5xl font-semibold'>Messages</h1>
            <div className='w-36 h-36 sm:w-48 sm:h-48 rounded-full bg-blue-500'></div>
            <p className='text-center text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempore ad, animi minus consequatur quisquam non libero molestias officia dolorem dignissimos? Sunt, cum, tempore architecto maiores asperiores eius consequatur necessitatibus atque ipsam blanditiis, iste quidem amet reiciendis rerum dicta expedita? Laboriosam consectetur saepe aliquam sequi unde magni alias laudantium id! Laudantium, odit. Velit neque officiis praesentium ab non illum repellat?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis dolor, possimus fuga ducimus exercitationem doloribus neque ipsam totam eos optio.</p>
            <div>
              <h1 className='text-2xl font-semibold'>Dr. Wasim Arif</h1>
              <p className='text-lg mb-5'>Faculty Advisor</p>
            </div>
          </div>
        </SwiperSlide> */}





      </Swiper>
    </>
  )
}

export default Messages
