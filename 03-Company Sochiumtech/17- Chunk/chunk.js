//   Given an array and chunk size, divide the array into many subarrays where each subarray is of length size
const chunk = (array, size) => {
  const chunk = [];
  let i = 0;
  while (i < array.length) {
    chunk.push(array.slice(i, (i += size)));
  }
  return chunk;
};
console.log(chunk([1, 2, 3, 4, 5], 2)); //[ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
console.log(chunk([1, 2, 3, 4, 5], 3)); //[ [ 1, 2, 3 ], [ 4, 5 ] ]
