// [4] Rearrange subarrays of array depending on N size and K length of subarray ?

const rearrangeSubarrays = (arr, k) => {
  let result = [];
  for (let i = 0; i < arr.length - k; i++) {
    for (let j = i; j < i + k; j++) {
      n = arr[i];
    }
    result.push(n);
  }
  return result;
};
console.log(rearrangeSubarrays([1, 2, 3, 4, 5, 6], 2)); // [1,2,3,4]
console.log(rearrangeSubarrays([1, 2, 3, 4, 5, 6], 3)); // [1,2,3]
