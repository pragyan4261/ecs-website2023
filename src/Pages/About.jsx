import React from 'react'
import FAQ from "../components/FAQ"
import Carousal2 from "../components/Carousal2";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const About = () => {
  return (
    <div className='bg-gradient-to-b from-blue-900 via-blue-600 to-blue-300'>
      <div>
        <Navbar/>
        <h1 className='mt-[9rem] mb-10 text-4xl font-semibold text-white'>KNOW <span className=''>ABOUT US</span></h1>
        <div><Carousal2 /></div>
        <p className='-mt-20 flex m-auto w-[90%] text-lg leading-8 mb-[9rem] text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum odio nisi tempore perspiciatis quis perferendis mollitia reiciendis enim. Quam cumque autem ipsa ad iure doloremque, perferendis quia enim ducimus, dicta accusamus, ex deleniti adipisci sit exercitationem? Ut quam placeat quae. Fuga labore non sapiente placeat cumque, inventore exercitationem hic consequuntur numquam corporis perspiciatis ratione dolorum possimus officiis ipsum molestiae, nulla reprehenderit nihil libero harum assumenda quam amet dolor. Exercitationem maiores perferendis inventore tenetur placeat. Veniam esse accusamus odio cumque nisi!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem adipisci id dolore autem quas atque mollitia pariatur fugit, accusamus doloremque tempora quibusdam dignissimos tenetur iste quia odit porro, eaque ad exercitationem a cum facilis qui fugiat. Placeat ut exercitationem laudantium quas perferendis cum temporibus repellendus, repellat ab id quis delectus, voluptas eum fuga rerum totam quos non vero tempore labore eos ex. Libero in beatae asperiores rem quo dicta, quibusdam illum omnis, repellendus sit suscipit hic fugit ex perferendis exercitationem.</p>
      </div>
      <div className='mb-[25rem]'>
        <FAQ/>
      </div>
      <Footer />
    </div>
  )
}

export default About
