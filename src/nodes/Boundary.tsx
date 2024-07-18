import { useEffect, useRef, useState } from "react"
import { Camera } from "./Camera";
import { Transform } from "../types/physics";
import { add_collider } from "../physics/colliders";

export const Boundary = () => {

    const node = useRef<HTMLDivElement>(null);

    const [transform, setTransform] = useState<Transform>({
        id: Date.now(),
        position: {
            x: 0,
            y: 500
        },
        width: 10000,
        height: 100,
        rotation: 0
    } as Transform);

    const _update = (delta: number) => {

    }

    const _fixed = () => {

        add_collider(transform);

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

    }, [transform])

    return (
        <div className="absolute bg-black
        -translate-x-1/2 -translate-y-1/2"
        ref={node}
        style={{
            top: transform.position.y,
            left: transform.position.x,
            height: transform.height,
            width: transform.width,
            rotate: `${transform.rotation}deg`
        }}>
            
			<Camera
			anchor={transform.position}/>

        </div>
    )
}