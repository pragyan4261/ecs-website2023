import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/COS/Card';
import Timer from '../components/COS/clock'


const Chamber = () => {
  return (
    <div>
        <h1>
            Chamber of secrets
            <Navbar home='inactive' events='active' developers='inactive' about='inactive' feed='inactive' members='inactive' />
            <Card question={"Question"} answer={"answer"} />
        </h1>
      <Timer />
    </div>
  )
}

export default Chamber
