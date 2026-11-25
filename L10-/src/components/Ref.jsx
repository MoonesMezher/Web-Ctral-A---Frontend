import { useEffect, useRef, useState } from "react"

const Ref = () => {
    const [color, setColor] = useState("black")
    const div = useRef();
    
    useEffect(() => {
        if(div) {
            div.current.style.backgroundColor = color;
        }
    }, [color])

    return (
        <div>
            <input type="color" onChange={(e) => setColor(e.target.value)} />

            <div ref={div} className="h-[300px] mx-auto border"></div>
        </div>
    )
}

export default Ref