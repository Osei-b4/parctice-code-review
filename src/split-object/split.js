export function splitObject(key = [], value = []) {
  return Object.keys(key).map((key) => {
    return { [key]: key[value] };
  });
}

//({ [value]: obj[key] }));

// export function toSeparate   = {
//   name:'robs', import { splitObject } from './splitObject';

//   age: 25,
//   tall: true,
//   userName: 'sbor' };

// return  toSeparate.entries(obj).map(([key, value]) => ({ key, value }));
