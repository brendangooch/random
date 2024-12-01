/**
 * returns original value plus or minus up to offset parameter amount as a percentage of the original value
 * ie add to or remove from up to n% of the original value
 */

import { randomRange } from "./random-range.js";

export function randomPercentageOffset(value: number, offset: number): number {
    return value + randomRange(-offset * value, offset * value);
}