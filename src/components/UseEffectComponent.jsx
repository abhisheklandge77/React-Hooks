import { useEffect } from "react";
import { useState } from "react";

function UseEffectComponent(){

    const [ counter1, setCounter1 ] = useState(0);
    const [ counter2, setCounter2 ] = useState(1); 
    
    const handleCounter = () => {
        setCounter1(c1 => c1 + 1); // use function in setCounter1 to get latest value of counter
        setCounter2(c2 => c2 + 1);
    }

    useEffect(() => {
        console.log("Counters are :",counter1, counter2);
        // const timer = window.setInterval(() => {
        //     setCounter1(c1 => c1 + 1); // use function in setCounter1 to get latest value of counter
        // },1000);
        // return () => window.clearInterval(timer); // clear interval after component unmounted
      },[counter1, counter2]); // even if the two counters are changing at a time component will render only once

      
    return (
        <div>
           <div style={{width: "15%", border: "1px solid orange", borderRadius: "5px", margin: "10px auto", padding: "5px", backgroundColor: "yellow"}}>
           <div>Counter 1 : {counter1}</div>
            <div>Counter 2 : {counter2}</div>
           </div>
            <button onClick={handleCounter}>Increase</button>
        </div>
    );
}

export default UseEffectComponent;