import useCustomPointer from "../hooks/useCustomPointer";
function App() {
    const { x, y } = useCustomPointer();

    return (
        <>
            <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
            <div
                style={{
                    position: "fixed",
                    top: y,
                    left: x,
                    pointerEvents: "none",
                    transform: "translate(-50%, -50%)",
                    fontSize: "2rem",
                }}
            >
                🔥
            </div>
        </>
    );
}

export default App;