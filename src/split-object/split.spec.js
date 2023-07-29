import { splitObject } from './split.js';

describe('splitObject', () => {
  it('should split an object into an array of key-value pairs', () => {
    expect(splitObject); //.toEqual();
  });
  const originalObject = {
    name: 'John',
    age: 30,
    city: 'New York',
  };

  const result = splitObject(originalObject);

  const expected = [{ name: 'John' }, { age: 30 }, { city: 'New York' }];
});

// describe('README test', () => {
//     it('', () => {
//       expect(()).toEqual([]);
//     });
//   });
