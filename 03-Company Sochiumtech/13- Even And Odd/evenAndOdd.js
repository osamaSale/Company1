// [14] resorting given array and put the even number in first and the odd number in -the last 2
const evenAndOdd = (arr) => {
  // Sort Array
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  let even = [];
  let odd = [];

  for (let i = 0; i < arr.length; i++) {
    // even Array
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    }
    if (arr[i] % 2 === 1) {
      odd.push(arr[i]);
    }
  }
  return (result = [even, odd]);
};
console.log(evenAndOdd([1, 3, 4, 52, 4, 5, 2]));
