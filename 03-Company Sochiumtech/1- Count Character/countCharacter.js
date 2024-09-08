// [1] How to count the appearance of each character in a string ?

const countCharacter = (str) => {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    // check if character has been seen before
    if (result.hasOwnProperty(str[i])) {
      // increase its count by 1
      result[str[i]]++;
    } else {
      // add it to the object with a count of 1
      result[str[i]] = 1;
    }
  }
  return result;
};
console.log(countCharacter("osama")); // { o: 1, s: 1, a: 2, m: 1 }
