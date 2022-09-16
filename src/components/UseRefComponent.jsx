import { useRef } from "react";

function UseRefComponent() {
    const element = useRef(null);

    return(
        <div>
            <input ref={element}></input>
            <button onClick={() => element.current.focus()}>Focus In</button>
        </div>
    );
};

export default UseRefComponent;