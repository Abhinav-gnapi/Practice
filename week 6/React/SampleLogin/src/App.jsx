import './App.css'
import Login from './components/Login'
import Counter from '../../Hooks/src/components/Counter';
import React from 'react'


const isLoggined = true;
const isRegistered = true
const isUserRegistered = React.createContext();

function App() {
  return (
    // <isUserRegistered.Provider value={true}>
    //   <Login isRegistered={isUserRegistered} />
    // </isUserRegistered.Provider>
    // <>
    //   <Counter />
    // </>

    isLoggined ? <h1>Welcome User...</h1> : <Login isRegistered={isRegistered} />

  )
}

export default App
export {isUserRegistered}
