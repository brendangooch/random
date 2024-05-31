/**
 * some of these tests are NOT deterministic and might fail some of the time due to the random nature of "random"
 * designed to show off package behaviour
 * confident that each function behaves as expected
 */

import { chance, element, fifty50, integer, percentageOffset, range, valueOffset } from "./random.js";

describe('"random" library', () => {

    const NUM_TESTS = 10000;

    // range(min: number, max: number): number
    describe('range()', () => {

        test('returned value is within the specified range', () => {
            const min = 2;
            const max = 4;
            for (let i = 0; i < NUM_TESTS; i++) {
                expect(range(min, max)).toBeGreaterThanOrEqual(min);
                expect(range(min, max)).toBeLessThanOrEqual(max);
            }
        });

    });

    // integer(min: number, max: number): number
    describe('integer()', () => {

        const range: number[] = [5, 6, 7, 8, 9, 10];

        test('returned value is in the range of numbers between min and max', () => {
            for (let i = 0; i < NUM_TESTS; i++) {
                expect(range.includes(integer(range[0], range[range.length - 1]))).toBeTruthy();
            }
        });

    });

    // chance(chance: number): boolean
    describe('chance()', () => {

        const MARGIN_OF_ERROR = 0.03;

        // returns true roughly 25% of the time
        test('returns true rougnly 25% of the time', () => {
            const expected = NUM_TESTS * 0.25;
            let isTrue: number = 0;
            for (let i = 0; i < NUM_TESTS; i++) {
                if (chance(0.25)) isTrue++;
            }
            expect(isTrue).toBeGreaterThanOrEqual(expected - (expected * MARGIN_OF_ERROR));
            expect(isTrue).toBeLessThanOrEqual(expected + (expected * MARGIN_OF_ERROR));
        });

        // returns true roughly 50% of the time
        test('returns true rougnly 50% of the time', () => {
            const expected = NUM_TESTS * 0.5;
            let isTrue: number = 0;
            for (let i = 0; i < NUM_TESTS; i++) {
                if (chance(0.5)) isTrue++;
            }
            expect(isTrue).toBeGreaterThanOrEqual(expected - (expected * MARGIN_OF_ERROR));
            expect(isTrue).toBeLessThanOrEqual(expected + (expected * MARGIN_OF_ERROR));
        });

        // returns true roughly 75% of the time
        test('returns true rougnly 75% of the time', () => {
            const expected = NUM_TESTS * 0.75;
            let isTrue: number = 0;
            for (let i = 0; i < NUM_TESTS; i++) {
                if (chance(0.75)) isTrue++;
            }
            expect(isTrue).toBeGreaterThanOrEqual(expected - (expected * MARGIN_OF_ERROR));
            expect(isTrue).toBeLessThanOrEqual(expected + (expected * MARGIN_OF_ERROR));
        });

        // returns true roughly 99% of the time
        test('returns true rougnly 99% of the time', () => {
            const expected = NUM_TESTS * 0.99;
            let isTrue: number = 0;
            for (let i = 0; i < NUM_TESTS; i++) {
                if (chance(0.99)) isTrue++;
            }
            expect(isTrue).toBeGreaterThanOrEqual(expected - (expected * MARGIN_OF_ERROR));
            expect(isTrue).toBeLessThanOrEqual(NUM_TESTS);
        });

    });

    // percentageOffset(value: number, offset: number): number
    describe('percentageOffset()', () => {

        // always returns a value between value - (value * offset) and value + (value * offset)
        test('always returns a value between value - (value * offset) and value + (value * offset)', () => {
            const value = 1000;
            const offset = 5;
            const minValue = value - (value * offset);
            const maxValue = value + (value * offset);
            for (let i = 0; i < NUM_TESTS; i++) {
                const result = percentageOffset(value, offset);
                expect(result).toBeGreaterThanOrEqual(minValue);
                expect(result).toBeLessThanOrEqual(maxValue);
            }

        });

    });

    // valueOffset(value: number, offset: number): number
    describe('valueOffset()', () => {

        // returns a correct value between value - offset and value + offset
        test('returns a correct value between value - offset and value + offset', () => {
            const value = 100;
            const offset = 5;
            const minValue = value - offset;
            const maxValue = value + offset;
            for (let i = 0; i < NUM_TESTS; i++) {
                const result = valueOffset(value, offset);
                expect(result).toBeGreaterThanOrEqual(minValue);
                expect(result).toBeLessThanOrEqual(maxValue);
            }

        });

    });

    // element<T>(arr: T[]): T
    describe('element()', () => {

        // always returns a value from the array, does not mutate array
        test('always returns a value from the array, does not mutate array', () => {

            const strings: string[] = [
                'foo',
                'bar',
                'baz',
                'hello',
                'world'
            ];

            const stringifiedBefore = strings.join();

            for (let i = 0; i < NUM_TESTS; i++) {
                expect(strings.includes(element<string>(strings))).toBeTruthy();
            }

            const stringifiedAfter = strings.join();
            expect(stringifiedBefore).toBe(stringifiedAfter);

        });

    });

    // fifty50(): boolean
    describe('fifty50()', () => {

        // returns true roughly 50% of the time
        test('returns true rougnly 50% of the time', () => {
            let isTrue: number = 0;
            for (let i = 0; i < NUM_TESTS; i++) {
                if (fifty50()) isTrue++;
            }
            expect(isTrue).toBeGreaterThan(4700);
            expect(isTrue).toBeLessThan(5300);
        });

    });


});