import { useEffect, useRef, useState } from "react";

function RefExample(){
    const [count, setCount] = useState(0);
    const inputRef = useRef();
    
    const getData = () => {
        inputRef.current.focus();
        console.log(inputRef.current.value)
    }

    const previousCount = useRef(0);
    function change(){
        setCount(count + 1)
    }
    useEffect(()=> {
        console.log(previousCount.current = count);
    }, [count])

    return(
        <>
            <input type="text" ref={inputRef} />
            <button onClick={getData}>Log</button>
            <p>count: {count}</p>
            <p>Previous count: {previousCount.current}</p>
            <button onClick={change}>Increment</button>
        </>
    )
}
export default RefExample;