import { removeArray } from './difference.js';

describe('README test', () => {
  it('should not exclude values from the second param', () => {
    expect(removeArray([2, 1], [2, 3])).toEqual([1]);
  });
  // it('Should not repeat return values', () => {
  //  expect(removeArray([1, 2, 1], [2, 3])).toEqual([1]);
  // });
});
