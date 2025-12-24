import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement } from './component/CounterSlice';

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <p>count: {count}</p>
      <button onClick={() => {dispatch(increment())}}>+</button>
      <button onClick={() => {dispatch(decrement())}}>-</button>
    </>
  )
}

export default App
