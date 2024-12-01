/**
 * 
 */

import { randomInteger } from "./random-integer.js";

export function randomIntegerExcluding(min: number, max: number, excluded: number[]): number {
    const integer = randomInteger(min, max);
    if (excluded.includes(integer)) return randomIntegerExcluding(min, max, excluded);
    return integer;
}