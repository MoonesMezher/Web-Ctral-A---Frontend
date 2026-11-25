import { useState } from "react"

const MenuBar = () => {
    const [isShow, setIsShow] = useState(true);

    return (
        <div>
            <button onClick={() => setIsShow(!isShow)}>CHANGE</button>
            {isShow? "SHOW": "HIDE"}
        </div>
    )
}

export default MenuBar

// isShow => Boolean => initial value => true

// change isShow => if(isShow == true) isShow = false Else isShow = true

// if(isShow == true) => SHOW
// else => HIDE