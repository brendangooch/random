/**
 * selects and returns a random element from an array, without affecting the array
 */

import { randomInteger } from "./random-integer.js";

export function randomElement<T>(arr: T[]): T {
    return arr[randomInteger(0, arr.length - 1)];
}