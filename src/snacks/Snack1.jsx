import useSwitch from "../hooks/useSwitch";

function AppSnack1() {
    const [isOn, toggle] = useSwitch();

    return (
        <div>
            <h3>Il valore è: {isOn ? "ON" : "OFF"}</h3>
            <button onClick={toggle}>Cambia Stato</button>
        </div>
    );
}

export default AppSnack1;
