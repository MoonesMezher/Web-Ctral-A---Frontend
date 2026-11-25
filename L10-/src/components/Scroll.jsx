import { useState } from "react"

const Scroll = () => {
    const [color, setColor] = useState(false);

    window.onscroll = () => {
        if(window.scrollY >= 500) {
            setColor(true);
        } else {
            setColor(false);
        }
    }

    const toTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className={`h-[400vh] ${color? "bg-red-500": "bg-white"}`}>Scroll

            <button onClick={toTop} className="fixed right-[1rem] bottom-[1rem] cursor-pointer">TOP</button>
        </div>
    )
}

export default Scroll