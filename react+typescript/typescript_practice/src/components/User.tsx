import { useState } from "react";

type Props = {
    name:string;
    age:number;
}


function User({name, age}: Props) {
    const [count, setCount] = useState<number>(0);

    type Status = "loading" | "success" | "error";

    const [status, setStatus] = useState<Status>("loading");


    function handleClick(event:React.MouseEvent<HTMLButtonElement, MouseEvent>){
        setCount((prev) => count+1)
        console.log(count)
    }
    // return (  
    //     <>
    //     <div>
            
    //         <h1>{name}</h1>
    //         <p>{age}</p>
    //         <button onClick={handleClick} >Click</button>
    //         <p>{count}</p>
    //     </div>
    //     </>
    // );

    function changeStatus(){
        setStatus("success");
    }
    if (status === "loading") return (
    <>
    <button onClick={changeStatus} >Click</button>
    <p>Loading...</p>
    </>
    );
    if (status === "error") return <p>Error!</p>;

    return(
    <div>  
        <p>Name : <b>{name}</b></p>
        <p>Age : {age}</p>
     </div>
    )

}

export default User;