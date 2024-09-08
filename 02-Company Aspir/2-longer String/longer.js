//Given an array of products
const products = ["Apple", "Banana", "Cucumber", "Watermelon", "Ice-cream", "Orange", "Eggplant", "Egg"];

// [2] Takes an array as parameter and prints out all products with names longer than 5 characters
const allProductsNames = (str) => {
    let result = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i].length > 5) {
        result.push(str[i]);
      }
    }
    return result;
  };
  console.log(allProductsNames(products));
  // [ 'Banana','Cucumber','Watermelon', 'Ice-cream','Orange','Eggplant']
  