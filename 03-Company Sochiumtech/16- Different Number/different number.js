// [18] specific number returns a different number

const numberDifferent = (num) => {
  return Math.floor(Math.random() * 100) + num;
};
console.log(numberDifferent(1));
