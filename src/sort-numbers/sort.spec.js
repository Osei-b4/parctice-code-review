import { arrayOfNumbers } from './sort';

describe('README test', () => {
  it('should sort an array of number', () => {
    expect(arrayOfNumbers([1.5, 1, -1.5, 0, -1], [-1.5, -1, 0, 1.5, 1]))
      .toEqual[1];
  });
});

// it('should sort an array of number', () => {
//  expect(arrayOfNumbers([1.5, 1, -1.5, 0, -1],[-1.5, -1, 0, 1.5, 1])).toEqual[]);
// };
