import { useState, useEffect } from 'react';
import './CounterStyle.css'

function Counter(){
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("black")

    let fulltime = new Date().toLocaleTimeString();
    const [time, setTime] = useState("TIME");

    useEffect(() =>{
        if(count == 10){
            console.log("You successfully wasted 10s😂")
        }
        
        return( () =>
        console.log("You made one step👍"))
    }, [count])
    return(
        <>
        <div className='outer'>
            <div className='counter'>
                <button type='button' onClick={() => {setCount(count+1); setColor("green")}}>increment</button>
                <p className='val' style={{color: color}}>{count}</p>
                <button type='button' onClick={() => {setCount(count-1); setColor("red")}}>Decrement</button>
            </div>
            <div className='time'>
                <p className='val'>{time}</p>
                <button type='button' onClick={() => {setTime(fulltime);}}>Get Time</button>
            </div>
        </div>
        </>
    )

}
export default Counter