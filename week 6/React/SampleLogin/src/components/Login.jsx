import './LoginStyle.css';
import Input from './Input';
import { useState } from 'react';


function Login(props){
    const [state, setState] = useState("click login")

    return(
        <>
        <form className='form'>
            <Input type="text" placeholder="username" />
            <Input type="password" placeholder="password" />
            {/* {props.isRegistered ? null : <Input type="password" placeholder="confirm password" />} */}
            {!props.isRegistered && <Input type="password" placeholder="confirm password" />}
            <button type="button" onClick={() => {setState("you clicked login"); console.log(state);}}> {props.isRegistered ? "Login" : "Register"}</button>
            <h3>{state}</h3>
            
        </form>
        </>
    )
}      

export default Login;







// const isUserRegistered = true;
// function Login(props){
//     if(isUserRegistered){
//         return (
//             <>
//             <div className='container'>
//                 <Input type={props.type} placeholder={props.placeholder} />
//                 <button type="submit">Login</button>
//             </div>
//             </>
//         )
//     }
//     else {
//         return(
//             <>
//             <div className='container'>
//                 <Input2 type={props.type} placeholder={props.placeholder} />
//                 <button type="submit">Register</button>
//             </div>
//             </>
//         )
//     }       
// }
// export default Login;

