import './App.css'
import Login from './components/Login'
import Counter from './components/Counter';

const isLoggined = true;
const isUserRegistered = true;

function App() {
  return (
      isLoggined ? <h1>Welcome User</h1> : <Login isRegistered={isUserRegistered} />
    // <>
    //   <Counter />
    // </>
  )
}

export default App
