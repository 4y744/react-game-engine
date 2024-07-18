import { useEffect, useRef, useState } from "react"
import { Camera } from "./Camera";
import { get_input_vector } from "../math/vector";
import { Vector2 } from "../types/math";
import { Transform } from "../types/physics";
import { add_collider, is_colliding } from "../physics/colliders";

export const Player = () => {

    const node = useRef<HTMLDivElement>(null);

    const SPEED = 3;

    const [movement, setMovement] = useState<Vector2>({
        x: 0,
        y: 0
    } as Vector2);

    const [transform, setTransform] = useState<Transform>({
        id: Date.now(),
        position: {
            x: 0,
            y: 0
        },
        width: 64,
        height: 64,
        rotation: 0
    } as Transform);

    const _update = (delta: number) => {

        setMovement(get_input_vector("w", "s", "a", "d"));

    }

    const _fixed = () => {

        add_collider(transform);

        const new_transform = {
            ...transform,
            position: {
                x: transform.position.x + movement.x * SPEED,
                y: transform.position.y + movement.y * SPEED
            }
        }

        if(!is_colliding(new_transform)){
            console.log(false)
            setTransform(new_transform);
        }

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

    }, [transform, movement])

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
			anchor={transform.position}
            freezeY={false}/>

        </div>
    )
}