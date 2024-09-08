//Given an array of products
const products = ["Apple", "Banana", "Cucumber", "Watermelon", "Ice-cream", "Orange", "Eggplant", "Egg"];
// 1- Takes an array as parameter and prints out all products starting with any of these letters (A,E,I,O,U)

const prodectsFirstLetters = (str) => {
  // convert  array of string
  let string = str.toString().toUpperCase();
  // convert  string of array
  let letter = string.split(" ");
  let output = " ";

  for (let i = 0; i < letter.length; i++) {
    let duplicate = letter[i].match(/[aeiou]/gi);
    output = duplicate;
  }
  // remove characters duplicate
  let result = [...new Set(output)];
  // output
  return result.sort();
};

console.log(prodectsFirstLetters(products)); // [ 'A', 'E', 'I', 'O', 'U' ]
