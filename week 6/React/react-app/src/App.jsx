// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import {pi} from './function';
// import { doublePi, triplePi } from './function';
// import { Add, Mul, Div, Sub } from './components/Calc';
import Header from './components/Header.jsx'
// import Card from './components/Card.jsx'
import Card from './components/UserCard.jsx'
import List from './components/List.jsx';


// function createCard(list){
//   return (
//            <Card key={list.id} name={list.name} age={list.age} position={list.position} />
//   )
// }


function App() {

  // let fname = "Sachin";
  // let lname = "Tendulkar"
  return (
    <>
      {/* <p>{pi}</p> */}
      {/* <p>{doublePi()}</p>
      <p>{triplePi()}</p>
      <h1>Welcome {fname} {lname} to</h1> */}

       {/* <p>Addition = {Add(12, 4)}</p>
       <p>Subtraction = {Sub(12,4)}</p>
       <p>Multiplication = {Mul(12,4)}</p>
       <p>Division = {Div(12,4)}</p> */}

       <Header />
        
      {/* {List.map(createCard)} */}
      {List.map(list => <Card key={list.id} name={list.name} age={list.age} position={list.position} />)}
    </>
  )
}

export default App
