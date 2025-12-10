import './LoginStyle.css'
import { useState } from 'react'

function Form(){
    const [details, setDetails] = useState({
        fName: "",
        lName: "",
        email: ""
    });

    function formHandle(event) {
        const {name, value} = event.target;

        setDetails((pervVal) => {
            if(name === "fname"){
                return {
                    ...pervVal,
                    fName: value,
                    // lName: pervVal.lName,
                    // email: pervVal.email
                };
            } else if(name === "lname"){
                return {
                    ...pervVal,
                    // fName: pervVal.fName,
                    lName: value,
                    // email: pervVal.email
                };
            } else if(name === "email"){
                return {
                    ...pervVal,
                    // fName: pervVal.fName,
                    // lName: pervVal.lName,
                    email: value
                };
            }
        });
    }



    return(
        <>  
            <form>
                <p className='text'>Hello {details.fName} {details.lName}</p>
                <p className='email'>{details.email}</p>
                <input type='text'  onChange={formHandle} value={details.fName} name='fname' placeholder='first name' />
                <input type='text'  onChange={formHandle} value={details.lName} name='lname' placeholder='last name' />
                <input type='email' onChange={formHandle} value={details.email} name="email" placeholder='email' />
                <button>Submit</button>
            </form>
        </>
    )
}
export default Form;