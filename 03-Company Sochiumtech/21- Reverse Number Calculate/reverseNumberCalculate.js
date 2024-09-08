// [23] reverse number without using any string ( only calculations )

const reverseNumberCalculate = (num) => {
  let reverseNumber = 0;
  while (num > 0) {
    reverseNumber = reverseNumber * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return reverseNumber;
};
console.log(reverseNumberCalculate(123)); //321
