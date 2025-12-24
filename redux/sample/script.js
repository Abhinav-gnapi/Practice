import { createStore } from "https://cdn.jsdelivr.net/npm/redux@4.2.1/es/redux.mjs";

const initialState = {
    value: 0
};

function reducer(prevState = initialState, action){
    // if(prevState === undefined){
    //     return initialState;
    // }
    switch(action.type){
        case "increment" :
            return {
                ...prevState,
                value: prevState.value + 1
            };
        case "decrement":
            return {
                ...prevState,
                value: prevState.value - 1
            };
            default:
                return prevState
                
    }
}
const store = createStore(reducer);
const state = store.getState();
console.log(state)

store.subscribe(() =>{
    document.getElementById('value').innerText = store.getState().value;

})

document.getElementById("increment").onclick = ()=> {
    store.dispatch({
        type : "increment"
    })
};

document.getElementById("decrement").onclick = ()=> {
    store.dispatch({
        type: "decrement"
    });
};