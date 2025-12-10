import { useState } from 'react'
import './ListStyle.css'
import { useContext } from 'react';
import { createContext } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

const MyContext = createContext();
function List() {
    const [item, setItem] = useState();
    const [data, setData] = useState(() => {
        const retriveData = localStorage.getItem("todoList");
        return retriveData ? JSON.parse(retriveData) : [];
    });
    const inputRef = useRef();
    function addList(event){
        setItem(event.target.value)
    }

    function submitData(){
        if(item !== undefined){
        setData((prev) => {
            return [...prev, item]
        });
        inputRef.current.value = "";
        setItem()
        }
    }

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("todoList"));
        if(storedData){
            setData(storedData);
        }
    },[]);
    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(data));
    }, [data]);

    function clearData(){
        localStorage.clear("todoList")
        setData([]);
    }
return(
    <div className='conatiner'>
        <div className='heading'>
          <h1>To-do List</h1>
        </div>
        <div className='form'>
          <input type='text' name='inputData' onChange={addList} ref={inputRef}></input>
          <button onClick={submitData}>Add</button>
          <button onClick={clearData}>Clear</button>
        </div>
        <div className='list'>
            <ul>
                {data.map((items,ind) => <li key={ind}>{items}</li>)}
            </ul>
        </div>
    </div>
)
}
export default List







// import { useState } from 'react'
// import './ListStyle.css'
// import { useContext } from 'react';
// import { createContext } from 'react';
// import { data } from './Data';
// import { useRef } from 'react';

// const MyContext = createContext();
// function List() {
//     const [item, setItem] = useState();
//     const inputRef = useRef();
//     function addList(event){
//         setItem(event.target.value)
//     }

//     function submitData(){
//         if(item !== undefined){
//         data.push(item);
//         inputRef.current.value = "";
//         setItem()
//         }
//     }
// return(
//     <div className='conatiner'>
//         <div className='heading'>
//           <h1>To-do List</h1>
//         </div>
//         <div className='form'>
//           <input type='text' name='inputData' onChange={addList} ref={inputRef}></input>
//           <button onClick={submitData}>Add</button>
//         </div>
//         {/* <MyContext.Provider value={{item}}> */}
//         <div className='list'>
//             <ul>
//                 <Item/>
//             </ul>
//         </div>
//         {/* </MyContext.Provider> */}
//     </div>
// )
// }
// export default List

// function Item(){
//     // const {item} = useContext(MyContext)
//     // console.log(item)
//     return(
//         <>
//             {data.map((items,ind) => <li key={ind}>{items}</li>)}
//         </>
//     )
// }