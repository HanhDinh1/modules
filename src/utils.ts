export function add (x: number, y: number) {
    return x + y;
}

export function sample <T>(arr: T []): T { //generic function takes some type. You pass in some array of that type and it returns an element of that type.
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}