import { useState } from 'react'
import './ListStyle.css'
// import { useContext } from 'react';
import { createContext } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import ListItem from './ListItem';
import ListButton from './ListButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import UploadIcon from '@mui/icons-material/Upload';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

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

    // useEffect(() => {
    //     const storedData = JSON.parse(localStorage.getItem("todoList"));
    //     if(storedData){
    //         setData(storedData);
    //     }
    // },[]);
    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(data));
    }, [data]);

    function clearData(){
        localStorage.removeItem("todoList")
        setData([]);
    }

    const [isMark, setMark] = useState([]);
    function IsItemDone(id) {
        setMark(prev => {
            const copy = [...prev];
            console.log(copy)
            copy[id] = copy[id] === "line-through" ? "none" : "line-through";
            return copy;
        });
    }
    // console.log(isMark)


    function deleteItem(id){
        setData(pre => {
            return pre.filter( (el, indx) => {
                return indx !== id;
            });
        });
    }

return(
    <div className='conatiner'>
        <div className='heading'>
          <h1><FormatListBulletedIcon className='headingIcon'/>To-do List</h1>
        </div>
        <div className='form'>
          <input type='text' name='inputData' onChange={addList} ref={inputRef}></input>
          <button className='topButton' onClick={submitData}><UploadIcon  /></button>
          <button className='topButton' onClick={clearData}><DeleteForeverIcon  /></button>
        </div>
        <div className='list'>
            <ul>
                <div className='listItems'>
                {/* {data.map((items,ind) => <li key={ind} onClick={IsItemDone}  style={{textDecoration: isDone ? "line-through" : "none"}}>{items}</li>)} */}
                {data.map((items, ind) => <ListItem key={ind} id={ind} element={items} onClick={IsItemDone}  style={{textDecoration: isMark[ind] || "none"}}/>)}
                </div>
                <div className='deleteButtons'>
                {/* {data.map((items, ind) => <button key={ind}>Delete</button>)}    */}
                {data.map((items, ind) => <ListButton key={ind} id={ind} onChecked={deleteItem}/>)}
                </div>
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