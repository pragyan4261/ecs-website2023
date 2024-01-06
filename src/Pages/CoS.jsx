import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/COS/Card';

const Chamber = () => {
    return (
        <h1>
            Chamber of secrets
            <Navbar home='inactive' events='active' developers='inactive' about='inactive' feed='inactive' members='inactive' />
            <Card question={"Question"} answer={"answer"} />
        </h1>
    );
}
export default Chamber;