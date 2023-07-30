import { arrayOfNumbers } from './sort.js';

describe('README test', () => {
  it('should sort the array from smallest to largest', () => {
    expect(arrayOfNumbers([-1.5, 1, 1.5, 0, -1])).toEqual([
      -1.5, -1, 0, 1, 1.5,
    ]);
  });
});
