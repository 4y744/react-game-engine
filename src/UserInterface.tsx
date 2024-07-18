import { useEffect, useState } from "react"
import { is_key_pressed } from "./lifecycle/input";

export const UserInterface = () => {

    const [fps, setFps] = useState<number>(0);
    const [last, setLast] = useState<number>(Date.now())

    const _update = (delta: number) => {
        
        if(last + 100 < Date.now()){
            setLast(Date.now());
            setFps(Math.round(1 / delta));
        }

    }

    const _fixed = () => {
    }

    useEffect(() => {

        const handleUpdate = (event: any) => _update(event.detail);
        const handleFixed = () => _fixed();
        
        document.addEventListener("update", handleUpdate);
        document.addEventListener("fixed", handleFixed);

        return () => {
            document.removeEventListener("update", handleUpdate);
            document.removeEventListener("fixed", handleFixed);
        }

    }, [last])

    return (
        <div className="fixed right-0">
            <label>{fps}</label>
            <label>FPS</label>
        </div>
    )
}