// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {pi} from './function';
import { doublePi, triplePi } from './function';
import { Add, Mul, Div, Sub } from './components/Calc';

function App() {

  // let fname = "Sachin";
  // let lname = "Tendulkar"
  return (
    <>
      {/* <p>{pi}</p> */}
      {/* <p>{doublePi()}</p>
      <p>{triplePi()}</p>
      <h1>Welcome {fname} {lname} to</h1> */}

       <p>Addition = {Add(12, 4)}</p>
       <p>Subtraction = {Sub(12,4)}</p>
       <p>Multiplication = {Mul(12,4)}</p>
       <p>Division = {Div(12,4)}</p>
    </>
  )
}

export default App
