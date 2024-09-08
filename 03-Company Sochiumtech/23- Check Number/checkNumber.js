// [24] write function that returns true if the input has  no numbers and false if it has numbers (aaa12 => false )
const checkNumber = (str) => {
  let matchPattern = str.match(/\d+/g);
  if (matchPattern === null) {
    return true;
  }
  return false;
};
console.log(checkNumber("aaa12")); // false
console.log(checkNumber("aaa")); // true
