export const removeArray = (array = [], value = []) => {
  return array.filter((item) => !value.includes(item));
};
