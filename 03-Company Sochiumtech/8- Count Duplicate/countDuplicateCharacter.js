// [28] given a string return all the characters that repeated more than one time and how many time reapeted
const countDuplicateCharacter = (str) => {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    if (result[str[i]]) {
      result[str[i]]++;
    } else {
      result[str[i]] = 1;
    }
  }
  return result;
};
console.log(countDuplicateCharacter("osama")); //{ o: 1, s: 1, a: 2, m: 1 }
console.log(countDuplicateCharacter("aabcdd")); // { a: 2, b: 1, c: 1, d: 2 }
