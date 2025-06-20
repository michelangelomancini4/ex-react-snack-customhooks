import { useState, useEffect } from "react";

// Custom hook that update current date every second

export default function useDate() {

    const [time, setTime] = useState(new Date());


    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);



    return time;



}