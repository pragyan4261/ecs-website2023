import React from 'react'
import Navbar from '../components/Navbar';
import ResourceHubCard from '../cards/ResourceHubCard';
import Footer from '../components/Footer';
const ResourceHub = () => {
  const assets = [{ sem: 'FIRST SEMESTER', notes: '', course: '' },
  { sem: 'SECOND SEMESTER', notes: '', course: '' },
  { sem: 'THIRD SEMESTER', notes: '', course: '' },
  { sem: 'FOURTH SEMESTER', notes: '', course: '' },
  { sem: 'FIFTH SEMESTER', notes: '', course: '' },
  { sem: 'SIXTH SEMESTER', notes: '', course: '' },
  { sem: 'SEVENTH SEMESTER', notes: '', course: '' },
  { sem: 'EIGHTH SEMESTER', notes: '', course: '' }
  ];
  return (
    <div>
      <Navbar home='inactive' events='inactive' developers='inactive' about='inactive' feed='inactive' members='inactive' />
      <div className='text-[#ffffff] p-[4rem]'><h1 className='text-[2rem]'>RESOURCE HUB</h1>
        <p>LOrem ipsum dolor sit amet, consecture adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p></div>
      {assets.map((item) => <ResourceHubCard sem={item.sem} notes={item.notes} course={item.course} />)}
      <Footer />
    </div>
  )
}

export default ResourceHub
