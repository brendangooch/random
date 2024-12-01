/**
 * a random boolean generator has has chance parameter chance of returning true
 */

export function randomChance(chance: number): boolean {
    return Math.random() < chance;
}