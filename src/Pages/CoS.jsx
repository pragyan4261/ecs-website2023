import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/COS/Card';
import data from '../components/COS/QuestionSet.json';
import Timer from "../components/COS/Timer"
import './CoS.css';
import { useState, useEffect,useRef } from "react";
const Chamber = () => {
    const [question, setQuestion] = useState(1);
    const [entered,isEntered]=useState(false);
    const [start,setStart]=useState(false);
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
        const ans=userAnswer.split(" ");
        var finalString="";
        for(var i=0;i<ans.length;i++){
            if(ans[i]!==""){
                finalString+=ans[i];
            }
        }
        if(finalString ===curr.answer){
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
            let getUsers=await fetch('https://my-project-1-64eb2-default-rtdb.firebaseio.com/user.json',{method: 'GET',headers:{'Content-Type': 'application/json'}});
            let users=await getUsers.json();
            if(users){
                // let request=await fetch('https://my-project-1-64eb2-default-rtdb.firebaseio.com/user.json',{method: 'POST',mode:'no-cors',headers:{'Content-Type': 'application/json'},body:JSON.stringify({
                //     teamName:teamName,question:question,score:score
                // })});
                const userExists =Object.values(users).some(user => user.teamName === teamName.toLowerCase());
                if(userExists) {
                    alert("You have already logged in!");
                    isEntered(false);
                    setStart(false);
                }
                else{
                    let request=await fetch('https://my-project-1-64eb2-default-rtdb.firebaseio.com/user.json',{method: 'POST',mode:'no-cors',headers:{'Content-Type': 'application/json'},body:JSON.stringify({
                    teamName:teamName.toLowerCase(),question:question,score:score
                    })});
                    isEntered(true);
                }
            }
            else{
                let request=await fetch('https://my-project-1-64eb2-default-rtdb.firebaseio.com/user.json',{method: 'POST',mode:'no-cors',headers:{'Content-Type': 'application/json'},body:JSON.stringify({
                    teamName:teamName.toLowerCase(),question:question,score:score
                    })});
            }
        }
    }
    const startClick=()=>{
        setStart(true);
    }
    window.onbeforeunload = function() {
        return "Dude, are you sure you want to refresh?!";
    }
    return (
        <div styles={{ minHeight: '100vh',display:'flex',justifyContent:'center',alignItems:'center' }}>
            <Navbar home='inactive' events='inactive' developers='inactive' about='inactive' feed='inactive' members='inactive' />
            {
                start===false?
                <div className='startingCardCont'>
                    <div className='startingCard'>
                        <div className='innerCont'>
                            <p className='p1'>
                            Whispers of the arcane, secrets entwined. Embrace the shadows, unravel the unknown. Enter the mystic realm, conquer the riddles, and rise.
                            </p>
                            <p className='p2'>
                            Unlock the mysteries, crack the enigma! Join the ultimate riddle-solving challenge and let your intellect shine in this thrilling competition.
                            </p>
                            <p className='rules'>
                                <h1>Welcome to The Chamber of Secrets!! </h1>
                                <p>Rules:</p>
                                <ul>
                                    <li>Time limit: 60 minutes</li>
                                    <li>10 points for each correct answer</li>
                                    <li>In case of incorrect answer, multiple trials allowed</li>
                                    <li>After the game starts, you must not leave the site. Doing so will automatically restart the game.</li>
                                    <li>Players of the same group must enter only in one device</li>
                                    <li>Not following the above the rules will lead to disqualification.</li>
                                </ul>
                            </p>
                            <button className='nextBtn' onClick={startClick}>NEXT</button>
                        </div>
                    </div>
                </div>:null
            }
            {entered===false && start===true?
            <div style={{zIndex:'2',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',minHeight:'80vh'}}>
                <form method="POST" className='flex flex-col p-[3rem] bg-[#00001165] w-[80%] h-[100%] rounded-[1rem]'>
                    <input type="text" placeholder="Enter your team name" value={teamName} onChange={(e)=>setteamName(e.target.value)} name="team" style={{backgroundColor:"#aaaaaa55",padding:'1rem',border:'1px solid #40ff00',borderRadius:'2rem',color:'#ffffff'}} />
                    <input type="submit" className='subBtn' value="START THE GAME" onClick={enterTheGame} />
                </form>
                </div>:null
            }
            {
                start===true && entered===true?
            <div className='h-[100vh] flex flex-col items-center justify-center' style={{filter:`blur(${entered===false?'8px':'0px'})`}}>
                <Timer />
                <div className='scoreCont'>{score}</div>
                <div className="qcard p-[3rem] rounded-[2rem] w-[60%] h-auto space-y-10 text-white">
                    <Card question={curr.question} answer={curr.answer} />
                    <div styles={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '1rem' , zIndex: 20}}>
                        <button className='bg-[#000055] text-[#ffffff] w-36 h-10 rounded-lg hover:rounded-full ' style={{ margin: '0 auto' }} onClick={checkCorrect}>Submit</button>
                    </div>
                </div>
            </div>:null
}
            <Footer />
        </div>
    );
}
export default Chamber;