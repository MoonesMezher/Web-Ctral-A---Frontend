import Layout from "./components/Layout";

const PLAYERS = ["MESSI", "CR7", "MO.SALAH"];
function App() {
    return <Layout>
        {PLAYERS.map((e, i) => <div key={i}>{e}</div>)}
        {/* <section className="section">grgergregre</section> */}
    </Layout>
}

export default App;