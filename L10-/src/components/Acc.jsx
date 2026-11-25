import { useState } from "react";

const DATA = [
    {
        id: 1,
        q: "efwefwef",
        a: "defewgweg"
    },
    {
        id: 2,
        q: "efwefwef",
        a: "defewgweg"
    },
    {
        id: 3,
        q: "efwefwef",
        a: "defewgweg"
    }
];

const Acc = () => {
    const [target, setTarget] = useState(0);

    return (
        <div>
            {DATA.map((e, i) => <div onClick={() => setTarget(i)}>{e.id} - {e.q} - {target === i && e.a}</div>)}
        </div>
    )
}

export default Acc