// give you array [10,20,6,5,4,5,8] and return the element was repeat (return 5)
//  Find a duplicate number
const findDuplicate = (arr) => {
  let result = [];
  let sort = arr.sort();
  for (let i = 0; i < sort.length; i++) {
    if (sort[i + 1] === sort[i]) {
      result += sort[i];
    }
  }
  return result;
};
console.log(findDuplicate([10, 20, 6, 5, 4, 5, 8])); // 5
