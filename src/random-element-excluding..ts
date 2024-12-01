/**
 * selects and returns a random element from an array, without affecting the array, excluding any elements in the excluded list
 */

import { randomElement } from "./random-element.js";

export function randomElementExcluding<T>(arr: T[], excluded: T[]): T {
    const element = randomElement(arr);
    if (excluded.includes(element)) return randomElementExcluding(arr, excluded);
    return element;
}