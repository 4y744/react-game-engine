const input_map = new Map<string, boolean>();

document.addEventListener("keydown", (event) => {
    input_map.set(event.key.toLocaleLowerCase(), true);
})

document.addEventListener("keyup", (event) => {
    input_map.set(event.key.toLocaleLowerCase(), false);
});

export const is_key_pressed = (key: string) => {
    return input_map.get(key);
}