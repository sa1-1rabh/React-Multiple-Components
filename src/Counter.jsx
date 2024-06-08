import React,{useState} from "react";

function Counter(){
    const [count,setCount] = useState(0);

    const increment = () => {
        setCount(count+1);
    }

    const decrement = () => {
        setCount(count-1);
    }

    const reset = () => {
        setCount(0);
    }

    return (<div className = "counter-container">
                <p className = "counter-display">{count}</p>
                <div className = "counter-button-container">
                    <button onClick = {decrement} className = "counter-button">Decrement</button>
                    <button onClick = {reset} className = "counter-button">Reset</button>
                    <button onClick = {increment} className = "counter-button">Increment</button>
                </div>
            </div>);
}

export default Counter;