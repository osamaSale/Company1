// [22] digit root (input: 4567 -> 4+5+6+7 = 22 ---> 2+2 = output: 4

const digitRoot = (input) => {
  let arr = [];
  let reducer = (a, b) => parseInt(a) + parseInt(b);
  while (input > 9) {
    arr = input.toString().split("");
    input = arr.reduce(reducer);
  }
  return input;
};
console.log(digitRoot(4567)); //4
