import { Transform } from "../types/physics";

const colliders = new Map<number, Transform>();

export const add_collider = (transfrom: Transform) => {

    colliders.set(transfrom.id, transfrom);
}

export const is_colliding = (transform: Transform) => {

    let hit = false;

    colliders.forEach((value, key) => {

        if(key == transform.id)
            return false;

        if(     
            value.position.x - value.width / 2 < transform.position.x + transform.width / 2 &&
            value.position.x + value.width / 2 > transform.position.x - transform.width / 2 &&
            value.position.y - value.height / 2 < transform.position.y + transform.height / 2 &&
            value.position.y + value.height / 2 > transform.position.y - transform.height / 2
        ) hit = true;

    })
    console.log(colliders)
    return hit;

}
