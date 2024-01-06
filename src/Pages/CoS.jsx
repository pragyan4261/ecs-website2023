import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/COS/Card';
import data from '../components/COS/QuestionSet.json';
import Timer from "../components/COS/Timer"
import { useState, useEffect } from "react";
const Chamber = () => {
    const [question, setQuestion] = useState(1);
    const [curr, setCurr] = useState({
        question: "", answer: ""
    });
    useEffect(() => {
        data.map((item) => {
            if (item.id === question) {
                setCurr({
                    question: item.question,
                    answer: item.answer
                });
            }
        });
    }, []);
    return (
        <div styles={{ minHeight: '100vh' }}>
            <Navbar home='inactive' events='inactive' developers='inactive' about='inactive' feed='inactive' members='inactive' />
            <div className='h-[100vh] flex flex-col items-center justify-center'>
                <Timer />
                <div className='bg-[#aaaadd] p-[2rem] rounded-[2rem]'>
                    <Card question={curr.question} answer={curr.answer} />
                    <div styles={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '1rem' }}>
                        <button className='bg-[#000055] text-[#ffffff]' styles={{ margin: '0 auto' }}>Submit</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Chamber;