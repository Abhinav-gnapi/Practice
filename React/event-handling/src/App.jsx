
import './App.css'
import { animals } from './components/list'
import Login from './components/Login'
import { useRef } from "react";
import Form from './components/Form';

function App() {
  // const [loffy, puppy] = animals
  // const reference = useRef(true);
  
  // const handleUpdate = () => {
  //   reference.current = !reference.current;
  //   console.log(reference.current); // true
  //   console.log(reference); // true
  // };
  // console.log(reference.current); // true
  // console.log(animals)
  return (
    <>
      {/* {animals.map((list, ind) => (
        <div key={ind}>
          <h3>{list.name}</h3>
          <ul>{list.routine.map((rout, indx) => (<li key={indx}>{rout}</li>))}</ul>

        </div>
        ))} */}

        {/* <Login /> */}

      {/* <button onClick={handleUpdate}>Update</button> */}
      <Form />
    </>
  )
}

export default App
