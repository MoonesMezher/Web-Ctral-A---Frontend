import { useEffect, useState } from "react"

const Fetch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setData(json))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false))
    }, [])
    
    return (
        <>
            {loading && "LOADING ..."}
            {!loading && !error && <ul>{data.map((e, i) => <li key={i}>{e.id} - {e.title}</li>)}</ul>}
            {!loading && error && <div>{error}</div>}
        </>
    )
}

export default Fetch;

// PESUDO CODE

// data = []
// error = null
// loading = true

// api:
// => SUCCESS: data & loading = false
// => ERROR: error & loading = false

// if(loading): UI LOADING
// if(!loading):
// => ERROR: UI ERROR
// => NOT ERROR: UI DATA