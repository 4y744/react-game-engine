import { is_key_pressed } from "../lifecycle/input"
import { Vector2 } from "../types/math";

export const get_input_vector = (up: string, down: string, left: string, right: string) => {

    const vector = {
        x: 0,
        y: 0
    }

    if(is_key_pressed(up))
        vector.y -= 1;
    if(is_key_pressed(down))
        vector.y += 1;
    if(is_key_pressed(left))
        vector.x -= 1;
    if(is_key_pressed(right))
        vector.x += 1;
    
    return normalize(vector);
}

export const normalize = (vector: Vector2) : Vector2 => {

    const c = Math.sqrt(vector.x ** 2 + vector.y ** 2);

    if(c == 0)
        return {
            x: 0,
            y: 0
        } as Vector2

    return {
        x: vector.x / c,
        y: vector.y / c
    } as Vector2
}