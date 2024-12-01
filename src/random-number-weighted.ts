/**
 * a simple 'weighted' random number generator
 */

import { randomElement } from "./random-element.js";

export function randomNumberWeighted(numbers: { number: number; weight: number }[]): number {
    const outcomes: number[] = [];
    numbers.forEach(n => { for (let i = 0; i < n.weight; i++) outcomes.push(n.number) });
    return randomElement<number>(outcomes);
}