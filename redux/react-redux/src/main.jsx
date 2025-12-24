import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider} from 'react-redux'
import App from './App.jsx'
import { createStore } from 'redux'

const store = createStore(counterReducer);

function counterReducer(state = {count:0}, action){
  switch(action.type){
    case "increment" :
      return{count: state.count + 1}
    case "decrement" :
      return{count: state.count - 1}
    default:
      return state;
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
