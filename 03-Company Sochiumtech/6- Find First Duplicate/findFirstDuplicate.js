// [19]  find frist duplicate number form array
const findFirstDuplicate = (num) => {
  let data = [];

  for (duplicate of num) {
    if (data[duplicate]) {
      return duplicate;
    } else {
      data[duplicate] = duplicate;
    }
  }
  return -1;
};
console.log(findFirstDuplicate([1, 2, 3, 4, 5, 2, 2, 1])); //1
