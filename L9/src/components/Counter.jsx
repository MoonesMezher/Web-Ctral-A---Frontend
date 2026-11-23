import { useState } from "react";
import "./Counter.css";

const Counter = () => {
    console.log("Hello");
    
    const [counter, setCounter] = useState(0);

    const up = () => setCounter(counter + 1)

    const down = () => setCounter(counter - 1)

    const zero = () => setCounter(0);

    return (
        <div>
            <button onClick={up}>+</button>
            <button onClick={down}>-</button>
            <button onClick={zero}>0</button>
            <p>{counter}</p>
        </div>
    )
}

export default Counter