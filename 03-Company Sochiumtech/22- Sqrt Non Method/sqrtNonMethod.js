// [25] write function that calculate the root of number without using methods
const sqrtNonMethod = (a) => {
  var x,
    x1 = a / 2;

  do {
    x = x1;
    x1 = (x + a / x) / 2;
  } while (x !== x1);
  return x;
};
console.log(sqrtNonMethod(4)); // 2
