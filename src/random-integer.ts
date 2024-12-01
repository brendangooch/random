/**
 * generate a random integer between min and max values
 */

export function randomInteger(min: number, max: number): number {
    return Math.floor(min + Math.random() * (max - min + 1));
}