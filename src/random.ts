/**
 * a collection of methods to generate random numbers
 * credit Coding Math on YouTube
 */

// works with negative numbers
export function integer(min: number, max: number): number {
    return Math.floor(min + Math.random() * (max - min + 1));
}

export function chance(chance: number): boolean {
    return Math.random() < chance;
}

export function valueOffset(value: number, offset: number): number {
    return value + range(-offset, offset);
}

// array element
export function element<T>(arr: T[]): T {
    return arr[integer(0, arr.length - 1)];
}

// works with negative numbers
export function range(min: number, max: number): number {
    return min + Math.random() * (max - min);
}

export function percentageOffset(value: number, offset: number): number {
    return value + range(-offset * value, offset * value);
}

// a 50/50 chance of true or false
export function fifty50(): boolean {
    return chance(0.5);
}