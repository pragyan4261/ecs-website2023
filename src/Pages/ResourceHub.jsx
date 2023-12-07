import React from 'react'
import Navbar from '../components/Navbar';
import ResourceHubCard from '../cards/ResourceHubCard';
import Footer from '../components/Footer';

const ResourceHub = () => {
  const assets = [{ sem: 'FIRST SEMESTER', notes: '/notes/First', course: 'http://ec.nits.ac.in/wp-content/uploads/2022/03/Course-Structure-ForiB.-Tech-In-Electronics-Communication-Engineering.pdf' },
  { sem: 'SECOND SEMESTER', notes: '/notes/Second', course: 'http://ec.nits.ac.in/wp-content/uploads/2022/03/Course-Structure-ForiB.-Tech-In-Electronics-Communication-Engineering.pdf' },
  { sem: 'THIRD SEMESTER', notes: '/notes/Third', course: 'http://ec.nits.ac.in/wp-content/uploads/2022/03/Course-Structure-ForiB.-Tech-In-Electronics-Communication-Engineering.pdf' },
  { sem: 'FOURTH SEMESTER', notes: '/notes/Fourth', course: 'http://ec.nits.ac.in/wp-content/uploads/2022/03/Course-Structure-ForiB.-Tech-In-Electronics-Communication-Engineering.pdf' },
  { sem: 'FIFTH SEMESTER', notes: '/notes/Fifth', course: 'http://ec.nits.ac.in/wp-content/uploads/2022/03/Course-Structure-ForiB.-Tech-In-Electronics-Communication-Engineering.pdf' },
  { sem: 'SIXTH SEMESTER', notes: '/notes/Sixth', course: 'http://ec.nits.ac.in/wp-content/uploads/2022/03/Course-Structure-ForiB.-Tech-In-Electronics-Communication-Engineering.pdf' },
  { sem: 'SEVENTH SEMESTER', notes: '/notes/Seventh', course: 'http://ec.nits.ac.in/wp-content/uploads/2022/03/Course-Structure-ForiB.-Tech-In-Electronics-Communication-Engineering.pdf' },
  { sem: 'EIGHTH SEMESTER', notes: '/notes/Eighth', course: 'http://ec.nits.ac.in/wp-content/uploads/2022/03/Course-Structure-ForiB.-Tech-In-Electronics-Communication-Engineering.pdf' }
  ];
  return (
    <div>
      <Navbar home='inactive' events='inactive' developers='inactive' about='inactive' feed='inactive' members='inactive' />
      <div className='flex flex-col justify-center items-center m-auto text-[#ffffff] p-[4rem]'><h1 className='text-[2rem]'>RESOURCE HUB</h1>
        <p>LOrem ipsum dolor sit amet, consecture adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p></div>
      {assets.map((item) => <ResourceHubCard sem={item.sem} notes={item.notes} course={item.course} />)}
      <Footer />
    </div>
  )
}

export default ResourceHub
