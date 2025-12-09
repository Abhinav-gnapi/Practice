
import './App.css'
import { animals } from './components/list'
import Login from './components/Login'

function App() {
  const [loffy, puppy] = animals

  console.log(animals)
  return (
    <>
      {/* {animals.map((list, ind) => (
        <div key={ind}>
          <h3>{list.name}</h3>
          <ul>{list.routine.map((rout, indx) => (<li key={indx}>{rout}</li>))}</ul>

        </div>
        ))} */}

        <Login />
    </>
  )
}

export default App
