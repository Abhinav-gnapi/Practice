import { useState, createContext, useContext } from "react";

const MyContext = createContext();

function ContextExample(){
    const [isToggle, setToggle] = useState(false);
    return(

    <MyContext.Provider value={{isToggle, setToggle}}>
        <div>
            <ChildToggle />
            <ChildDisp />
        </div>
    </MyContext.Provider>

    );
};
export default ContextExample;

const ChildToggle = () => {
    const {setToggle} = useContext(MyContext);
    return(
        <>
            <button onClick={()=>setToggle((val) => !val)}>Toggle State</button>
        </>
    )
};

const ChildDisp = () => {
    const {isToggle} = useContext(MyContext);
    return(
        <>
            <p>Current State: {isToggle ? "ON" : "OFF"}</p>
        </>
    )
}

