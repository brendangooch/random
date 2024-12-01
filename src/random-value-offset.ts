/**
 * returns original value parameter plus or minus a randomly generated offset up to offset parameter
 */

import { randomRange } from "./random-range.js";

export function randomValueOffset(value: number, offset: number): number {
    return value + randomRange(-offset, offset);
}