import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    console.log(1)

    const up = () => {
        setCounter(counter + 1);
    };

    return (
        <div>
            <button onClick={up}>+</button>
            <button>-</button>
            <button>0</button>

            <p>{counter}</p>
        </div>
    )
}

export default Counter