import { useState } from "react";
import { useReducer } from "react";

const initialState = {
    counter: 10,
};

function counterReducer(state = initialState, action) {
    if(typeof action.payload !== 'number' || isNaN(action.payload)){
        return state;
    }
        switch (action.type) {
            case "increament":
                return {
                    counter: state.counter + (action.payload)
                };
            case "decreament":
                return {
                    counter: state.counter - (action.payload)
                };
            default:
                throw new Error("Bad action !");
        }
}

function UseReducerComponent() {

    const [state, dispatch] = useReducer(counterReducer, initialState);
    const [payload, setPayload] = useState(0);

    return (
        <div>
            <div style={{ border: "1px solid blue", padding: "8px", backgroundColor: "lightblue", width: "10%", margin: "10px auto", borderRadius: "5px" }}>Counter : {state.counter}</div>
            <label htmlFor="payload">Enter number : </label>
            <input type="number" id="payload" onChange={(e) => { setPayload(parseInt(e.target.value)) }}></input>
            <button onClick={() => {
                dispatch({
                    type: "increament",
                    payload: payload
                })
            }}>Increament</button>
            <button onClick={() => {
                dispatch({
                    type: "decreament",
                    payload: payload
                })
            }}>Decreament</button>
        </div>
    );
}

export default UseReducerComponent;