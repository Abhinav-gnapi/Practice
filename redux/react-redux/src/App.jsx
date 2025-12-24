import { useDispatch, useSelector } from 'react-redux'
import './App.css'

function App() {

  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <p>Count: {count}</p>
        <button onClick={() => dispatch({type: "increment"})}>+</button>
        <button onClick={() => dispatch({type: "decrement"})}>-</button>
      </div>
    </>
  )
}

export default App
