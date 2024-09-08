// [1] given an array of integer numbers, you must sort it (The maximum number, minimum number, second max number, second minimum number)
// [1] Rearrange sorted array by putting [max1, min1,max2,min2...].
const maximumNumber = (num) => {
  num.sort();
  let maxNumber = num[0];
  let minNumber = num[0];
  let maxSecond = num[1];
  let minSecond = num[1];
  for (let i = 0; i < num.length; i++) {
    if (num[i] > maxNumber) {
      maxNumber = num[i];
    } else if (num[i] < minNumber) {
      minNumber = num[i];
    }
    if (num[i] > maxSecond) {
      maxSecond = num[i - 1];
    } else if (num[i] < minSecond) {
      minSecond = num[i + 1];
    } else {
    }
  }
  let result = { maxNumber, minNumber, maxSecond, minSecond };
  return result;
};

console.log(maximumNumber([1, 2, 3, 4, 5, 6, 0, 9, 8]));
// { maxNumber: 9, minNumber: 0, maxSecond: 8, minSecond: 1 }

// [1] Simplest way to find max/ min of the array.

const findMaxAndMin = (arr) => {
  let maxValue = arr[0];
  let minValue = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
    if (arr[i] < minValue) {
      minValue = arr[i];
    }
  }
  return (result = [maxValue, minValue]);
};
const findMaxAndMin1 = (arr) => {
  let maxValue = Math.max(...arr);
  let minValue = Math.min(...arr);
  return { maxValue, minValue };
};
console.log(findMaxAndMin1([0, 1, 2, 3, 4, 5])); // { maxValue: 5, minValue: 0 }
