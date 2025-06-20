import useDate from "../hooks/useDate";

function App() {
    const currentDate = useDate();

    return (
        <div>
            <h3>Data e ora attuali:</h3>
            <p>{currentDate.toLocaleString()}</p>
        </div>
    );
}

export default App;