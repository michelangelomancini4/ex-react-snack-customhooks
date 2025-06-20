import { useState } from "react";
// Creare un custom hook per alternare un valore booleano tra true e false.

// Cosa deve fare?
// Inizialmente false.
// Ritorna il valore attuale e una funzione toggle() per cambiarlo.
// Quando toggle() viene chiamato, il valore passa da true → false e viceversa.

export default function useSwitch(initialValue = false) {

    const [isOn, setIsOn] = useState(initialValue);
    const toggle = () => { setIsOn(value => !value) }

    return [isOn, toggle]
}

