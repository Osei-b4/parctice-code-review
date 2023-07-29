export const splitObject = (key = [], value = []) => {
  return Object.keys(key).map((value) => {
    return { [key]: key[value] };
  });
};
