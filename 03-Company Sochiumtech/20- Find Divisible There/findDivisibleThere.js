// find numbers will It is divisible by three

const findDivisibleThere = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(findDivisibleThere([1, 2, 3, 4, 5, 6, 7, 9, 12, 15, 11])); //[ 3, 6, 9, 12, 15 ]
