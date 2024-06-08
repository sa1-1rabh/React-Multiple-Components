import React,{useState,useEffect,useRef} from "react";
import Explaination from "./assets/StopWatch-Explaination.jpg";

function StopWatch(){
    const [isRunning,setIsRunning] = useState(false);
    const [elapsedTime,setElapsedTime] = useState(0);

    const startTimeRef = useRef(0);
    const intervalIdRef = useRef(null);

    useEffect(() => {
        if(isRunning){
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            },10)
        }
        
        return (() => {
            clearInterval(intervalIdRef.current);
        })
    },[isRunning]);
    
    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop(){
        setIsRunning(false);
    }

    function reset(){
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime(){
        let hours = Math.floor(elapsedTime/(1000*60*60));
        let minutes = Math.floor(elapsedTime/(1000*60)%60);
        let seconds = Math.floor(elapsedTime/(1000)%60);
        let miliSeconds = Math.floor(elapsedTime%1000);

        hours=String(hours).padStart(2,"0");
        minutes=String(minutes).padStart(2,"0");
        seconds=String(seconds).padStart(2,"0");
        miliSeconds=String(miliSeconds).padStart(3,"0");

        return `${minutes}:${seconds}:${miliSeconds}`;
    }

    return (<div>
        <h1>STOP WATCH</h1>
        <div className="stop-watch-timer">
            {formatTime()}<br/>
            <div className="stop-watch-buttons">
                <button onClick={start}>Start</button>
                <button onClick={stop}>Stop</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
        <h1>Explaination :-</h1>
        <img width="500px" src={Explaination}></img>
    </div>);
}

export default StopWatch;