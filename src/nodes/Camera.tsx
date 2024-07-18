import { useEffect } from "react"
import { Vector2 } from "../types/math";

export const Camera = ({ anchor, freezeY } : { anchor: Vector2, freezeY?: boolean }) => {

    const _fixed = () => {

        const x = anchor.x - window.innerWidth / 2;
        const y = freezeY ? 0 : anchor.y - innerHeight / 2;

        window.scrollTo(x, y);

    }

    useEffect(() => {

        const handleUpdate = () => _fixed();
        
        document.addEventListener("fixed", handleUpdate);

        return () => {
            document.removeEventListener("fixed", handleUpdate);
        }
        
    }, [anchor])

    return (
        <></>
    )
}