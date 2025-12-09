import { useEffect, useState } from "react";
import './LoginStyle.css'

function Login(){
    const [color, changeColor] = useState(true);
    const [bgcolor, changeBgColor] = useState("");
    const [name, setName] = useState("");
    const [handleName, setHandleName] = useState("");

    function handleMouseOver() {
        changeColor(false)
    }
    function handleMouseOut() {
        changeColor(true)
    }

    // useEffect(() => {
    //     document.body.style.backgroundColor = bgcolor;
    // },[bgcolor])
    
    function changeName(event) {
        setName((event.target.value).toUpperCase())
    }
    function HeadingName(event){
        setHandleName(name);

        event.preventDefault();
    }
    return(
        <>
            <form className="login" onSubmit={HeadingName}>
                <p className="text">Hello {handleName}</p>
                <input type="text" placeholder="What's your name" onChange={changeName}/>
                {/* <input type="password" placeholder="password" /> */}
                <button onClick={() => changeBgColor("white")} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{backgroundColor: color ? "black" : "red"}}>Submit</button>
            </form>
        </>
    )
}
export default Login