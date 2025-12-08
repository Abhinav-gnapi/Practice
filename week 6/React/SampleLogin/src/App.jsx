import './App.css'
import Login from './components/Login'
import Counter from '../../Hooks/src/components/Counter';
import React from 'react'
import Hooks from './hooks/Hooks';

const isLoggined = false;
const isUserRegistered = React.createContext();

function App() {
  return (
    // <isUserRegistered.Provider value={true}>
    //   <Login isRegistered={isUserRegistered} />
    // </isUserRegistered.Provider>
    // <>
    //   <Counter />
    // </>

    <Hooks />
  )
}

export default App
export {isUserRegistered}
