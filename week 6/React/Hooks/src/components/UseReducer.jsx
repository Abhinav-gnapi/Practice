import { useReducer } from "react";

const reducer = (val, action) => {
    switch(action.op) {
        case "increment":
            return {count: val.count + 1};
        case "decrement":
            return {count: val.count - 1};
    };
};

function ReducerExample(){
    const [st, dispatch] = useReducer(reducer, {count: 0});

    return(
        <div>
            <p>Count: {st.count}</p>
            <button onClick={() => dispatch({ op: "increment"})}>+</button>
            <button onClick={() => dispatch({ op: "decrement"})}>-</button>
        </div>
    )
}
export default ReducerExample
