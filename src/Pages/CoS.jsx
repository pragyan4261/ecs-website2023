import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/COS/Card';
import data from '../components/COS/QuestionSet.json';
import Timer from "../components/COS/Timer"
import { useState, useEffect,useRef } from "react";
const Chamber = () => {
    const [question, setQuestion] = useState(1);
    const [entered,isEntered]=useState(false);
    const [teamName,setteamName]=useState("");
    const [score,setScore]=useState(0);
    const [curr, setCurr] = useState({
        question: "", answer: ""
    });
    var questionLocal=[];
    const answerInputRef = useRef(null);
    useEffect(()=>{
        data.map((item)=>{
            questionLocal.push({
                question:item.question,
                answer:item.answer
            });
        })
        setCurr(questionLocal[question-1]);
    },[question]);
    const checkCorrect=async ()=>{
        const userAnswer = document.getElementById('answerBox').value.toLowerCase();
        if(userAnswer ===curr.answer){
            if(question<5){
            setQuestion(question+1);
            setScore(score+1);
            }else{
                alert("This was the last question");
            }
            // setCurr(questionLocal[question-1]);
        }
        else{
            alert("Wrong answer");
        }
    }
    const enterTheGame=async (e)=>{
        e.preventDefault();
        if(teamName!==""){
            let request=await fetch('https://my-project-1-64eb2-default-rtdb.firebaseio.com/user.json',{method: 'POST',mode:'no-cors',headers:{'Content-Type': 'application/json'},body:JSON.stringify({
                teamName:teamName,question:question,score:score
            })});
            isEntered(true);
        }
    }
    return (
        <div styles={{ minHeight: '100vh' }}>
            <Navbar home='inactive' events='inactive' developers='inactive' about='inactive' feed='inactive' members='inactive' />
            {entered===false?
            <div style={{position:'fixed',marginLeft:'50vw',marginTop:'40vh',zIndex:'2',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                <form method="POST" className='absolute flex flex-col p-[2rem] bg-[#000011aa]'>
                    <input type="text" placeholder="Enter your team name" value={teamName} onChange={(e)=>setteamName(e.target.value)} name="team" style={{backgroundColor:"#aaaaaa99"}} />
                    <input type="submit" value="PROCEED" onClick={enterTheGame} />
                </form>
                </div>:null
            }
            <div className='h-[100vh] flex flex-col items-center justify-center' style={{filter:`blur(${entered===false?'8px':'0px'})`}}>
                <Timer />
                <div className='bg-[#aaaadd] p-[2rem] rounded-[2rem]'>
                    <Card question={curr.question} answer={curr.answer} />
                    <div styles={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '1rem' }}>
                        <button className='bg-[#000055] text-[#ffffff]' style={{ margin: '0 auto' }} onClick={checkCorrect}>Submit</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Chamber;