import React from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/COS/Card';
import Timer from "../components/COS/Timer";
import './CoS.css';
import { useState, useEffect } from "react";
import { toast } from 'sonner';
import {db,collection,where,query,getDocs} from '../firebase';
const Chamber = () => {
    const [initAns,setInitAns]=useState("");
    const [time,setTime]=useState({
        hours:0,minutes:0,seconds:0
      });
//shows current Date and Time
const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: true,
});
    const navigate = useNavigate();
    const [question, setQuestion] = useState(1);
    const [entered,isEntered]=useState(false);
    const [start,setStart]=useState(false);
    const [teamName,setteamName]=useState("");
    const [score,setScore]=useState(0);
    const [curr, setCurr] = useState(null);
    useEffect(()=>{
        const now = new Date();
    
        // Get hours, minutes, and seconds
          const hours = now.getHours().toString().padStart(2, '0');
          const minutes = now.getMinutes().toString().padStart(2, '0');
          const seconds = now.getSeconds().toString().padStart(2, '0');
          setTime({
            hours:hours,minutes:minutes,seconds:seconds
          });
    },[]);
    
    useEffect(()=>{
        const getQuestion=async()=>{
            const callRef=collection(db,'questions');
            const q=query(callRef,where("qNo","==",question.toString()));
            const querySnapshot = await getDocs(q);
            let ques=[]
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              ques.push(doc.data());
            });
            setCurr(ques[0]);
        }
        getQuestion();
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
           toast.success("Correct answer");
            if(question<21){
            setQuestion(question+1);
            setScore(score+10);
            updateFirebaseData(teamName.toLowerCase(), question, score + 10);

            }else{
                updateFirebaseData(teamName.toLowerCase(), question, score + 10);
                toast.message("Congrats! You have solved all the questions.");
               setTimeout(()=>toast.message("Redirecting you to home page!"),1000);
               setTimeout(()=>navigate('/'),3000);
            }
            setInitAns("");
            // setCurr(questionLocal[question-1]);
        }
        else{
            toast.warning("Wrong answer");
        }
    }
    const updateFirebaseData = async (team, newQuestion, newScore) => {
        try {
            let getUsers = await fetch('https://my-project-1-64eb2-default-rtdb.firebaseio.com/user.json', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });
            let users = await getUsers.json();
    
            if (users) {
                const userExists = Object.values(users).some(user => user.teamName === team);
                if (userExists) {
                    // Find the user and update the data
                    const updatedUsers = Object.keys(users).map(key => {
                        if (users[key].teamName === team) {
                            return { ...users[key], question: newQuestion, score: newScore, timestamp: formattedDate };
                        }
                        return users[key];
                    });
    
                    // Update the entire data in Firebase
                    await fetch('https://my-project-1-64eb2-default-rtdb.firebaseio.com/user.json', {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(updatedUsers)
                    });
                }
            }
        } catch (error) {
            console.error("Error updating Firebase data:", error);
        }
    }
    const enterTheGame=async (e)=>{
        e.preventDefault();
        if(teamName!==""){
            let getUsers=await fetch('https://my-project-1-64eb2-default-rtdb.firebaseio.com/user.json',{method: 'GET',headers:{'Content-Type': 'application/json'}});
            let users=await getUsers.json();
            if(users){
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
    console.log(curr);
    return (
        <div styles={{ minHeight: '100vh',display:'flex',justifyContent:'center',alignItems:'center' }}>
            <Navbar home='inactive' events='inactive' developers='inactive' about='inactive' feed='inactive' members='inactive' />
            {
                start===false?
                <div className='startingCardCont'>
                    <div className='startingCard'>
                        <div className='innerCont'>
                            <p className='p1 text-sm sm:text-lg'>
                            Whispers of the arcane, secrets entwined. Embrace the shadows, unravel the unknown. Enter the mystic realm, conquer the riddles, and rise.
                            </p>
                            <p className='p2 text-sm sm:text-lg'>
                            Unlock the mysteries, crack the enigma! Join the ultimate riddle-solving challenge and let your intellect shine in this thrilling competition.
                            </p>
                            <p className='rules text-lg space-y-3'>
                                <h1 className='text-3xl mb-10'>Welcome to The Chamber of Secrets!! </h1>
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
                            <div className='flex justify-center items-center'>
                                {time.hours>=18?<button className='nextBtn' onClick={startClick}>NEXT</button>:<div className='bg-[#ffaa00] text-[#000000] p-[1rem] text-[0.7rem] sm:text-[1rem] mt-[1rem] rounded-[2rem]'>GAME HAS NOT STARTED YET</div>}
                            </div>
                        </div>
                    </div>
                </div>:null
            }
            {entered===false && start===true?
            <div style={{zIndex:'2',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',minHeight:'80vh'}}>
                <form method="POST" className='flex flex-col p-[3rem] bg-[#00001165] w-[80%] sm:w-[50%] h-[100%] rounded-[1rem] '>
                    <input type="text" placeholder="Enter your team name" value={teamName} onChange={(e)=>setteamName(e.target.value)} name="team" style={{backgroundColor:"#aaaaaa55",padding:'1rem',border:'1px solid #40ff00',borderRadius:'2rem',color:'#ffffff'}} />
                    <input type="submit" className='subBtn' value="START THE GAME" onClick={enterTheGame} />
                </form>
                </div>:null
            }
            {
                start===true && entered===true?
            <div className='h-[100vh] flex flex-col items-center justify-center' style={{filter:`blur(${entered===false?'8px':'0px'})`}}>
                {/* <Timer /> */}
                <div className='scoreCont text-white text-2xl mt-5'>Score is : {score}</div>
                <div className='text-white text-2xl mt-2'>Question Number : {question}</div>
                <div className="qcard p-[3rem] rounded-[2rem] w-[60%] space-y-10 text-white">
                    <Card setInit={setInitAns} init={initAns} question={curr.question} answer={curr.answer} image={curr.image} audio={curr.audio} />
                    <div styles={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '1rem' , zIndex: 20}}>
                        <button className='bg-[#4444ff] text-[#ffffff] w-36 h-10 rounded-lg hover:rounded-full ' style={{ margin: '0 auto' }} onClick={checkCorrect}>Submit</button>
                    </div>
                </div>
            </div>:null
}
            <Footer />
        </div>
    );
}
export default Chamber;



















