// [26] Armstrong number. ex (153=>1*1*1+5*5*5+3*3*3)
// [26] Find the armstrong numbers of 3 digits
//abcd... = an + bn + cn + dn + ...
//153 = 1*1*1 + 5*5*5 + 3*3*3
//1634 = 1*1*1*1 + 6*6*6*6* + 3*3*3*3 + 4*4*4*4

const armstrong = (num) => {
  let sum = 0;

  // create a temporary variable
  let temp = num;
  while (temp > 0) {
    // finding the one digit
    let remainder = temp % 10;
    sum += remainder * remainder * remainder;
    // removing last digit from the number
    temp = parseInt(temp / 10);
  }
  // check the condition
  if (sum === num) {
    return `${num} is an Armstrong number`;
  } else {
    return `${num} is not an Armstrong number.`;
  }
};
console.log(armstrong(153)); // ${num} is an Armstrong number
console.log(armstrong(1533)); // ${num} is an Armstrong number
