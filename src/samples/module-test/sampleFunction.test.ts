import { isEven, sum } from "./sampleFunction";

describe('math utilities', () => {
  describe('sum function', () => {
    it('adds two positive numbers', () => {
      expect(sum(2, 3)).toBe(5);
    });

    it('adds a positive and a negative number', () => {
      expect(sum(5, -2)).toBe(3);
    });

    it('adds two negative numbers', () => {
      expect(sum(-1, -3)).toBe(-4);
    });
  });

  describe('isEven function', () => {
    it('returns true for even numbers', () => {
      expect(isEven(4)).toBe(true);
    });

    it('returns false for odd numbers', () => {
      expect(isEven(3)).toBe(false);
    });

    it('returns true for zero', () => {
      expect(isEven(0)).toBe(true);
    });
  });
});
