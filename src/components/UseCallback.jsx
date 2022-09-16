import React, { useCallback, useEffect, useState } from "react";

function UseCallbackComponent() {
    const [message, setMessage] = useState("");
    const [counter, setCounter] = useState(0);

    // useCallback is used when we have to render component only when the dependency array changes (like api call after some value changes) 
    const getGreetings = useCallback(() => {
        return `Hello ${message}`;
    }, [message]);

    return (
        <div>
            <input type="text" onChange={(e) => setMessage(e.target.value)} />
            <GreetingComponent getGreetings={getGreetings} />
            <h3>Counter: {counter}</h3>
            <button onClick={() => setCounter(c => c + 1)}>Increase Counter</button>
        </div>
    )
}

function GreetingComponent(props) {
    const { getGreetings } = props;
    const [greetingMsg, setGreetingMsg] = useState("");

    useEffect(() => {
        setGreetingMsg(getGreetings());
        console.log("useEffect called...");
    }, [getGreetings]);
    return (
        <div>
            <h1>{greetingMsg}</h1>
        </div>
    )
}

export default UseCallbackComponent;