/**
 * returns a random number between min and max parameters
 */

export function randomRange(min: number, max: number): number {
    return min + Math.random() * (max - min);
}