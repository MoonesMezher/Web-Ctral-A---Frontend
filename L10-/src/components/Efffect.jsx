import { useEffect, useState } from "react";

const Efffect = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refresh, setRefresh] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null)
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPosts(json))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false))
    }, [refresh]);

    return (
        <div>
            <button onClick={() => setRefresh(!refresh)} className="fit-content bg-black text-white block mx-auto cursor-pointer">REFRESH DATA</button>
            {loading && <div>LOADING ...</div>}
            {!loading && error && <div>{error}</div>}
            {!loading && !error && posts.map((e, i) => <div className="bg-red-500 p-2 border border-solid border-black" key={i}>{e.title}</div>)}
        </div>
    )
}

export default Efffect