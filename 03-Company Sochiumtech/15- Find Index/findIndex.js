// Find the index of some elements in the array

const findIndexElement = (arr, item) => {
  const index = arr.indexOf(item);
  if (index !== 1 || index !== 0) {
    return `Element ${item} is found at index ${index}`;
  } else {
    return `Element ${item} not found in the array.`;
  }
};
console.log(findIndexElement(["a", "b"], "b")); // Element s not found in the array
console.log(findIndexElement([1, 2, 3, 4], 2)); //Element 4 is found at index 3
console.log(findIndexElement([1, 2, 3, 4], 1)); //Element 4 is found at index 3
