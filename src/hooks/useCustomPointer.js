import { useEffect, useState } from "react";

export default function useCustomPointer() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMovement = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        document.addEventListener("mousemove", handleMouseMovement);

        return () => {
            document.removeEventListener("mousemove", handleMouseMovement);
        };
    }, []);

    return position;
}
