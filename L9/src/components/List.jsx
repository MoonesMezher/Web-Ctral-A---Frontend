import { useState } from "react"

const List = () => {
    const [users, setUsers] = useState([]);
    /* const [name, setName] = useState("")
    const [age, setAge] = useState(); */
    const [form, setForm] = useState({ name: "", age: 0 })

    const save = (e) => {
        e.preventDefault();
        
        const data = form;

        setUsers([...users, data]);

        setForm({ name: "", age: 0 })
    }

    return (
        <div>
            <form>
                <input type="text" onChange={(e) => setForm({ ...form, name: e.target.value })} 
                    value={form.name}/>
                <input type="number" onChange={(e) => setForm({ ...form, age: e.target.value })}
                    value={form.age}/>
                <button onClick={save}>Save</button>
            </form>
            <div>
                {users.map((e, i) => <div className={`${+e.age > 20? "bg-red-500": "bg-blue-500"}`} key={i}>{e.name} - {e.age}</div>)}
            </div>
        </div>
    )
}

export default List