// [3] given a String, you must remove the duplicate letters, you must maintain the order of the letters?
// [3] Remove duplicated char's from the string.
const removeDuplicate = (str) => {
  let result = [];
  let frequency = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (frequency[char]) {
      frequency[char]++;
    } else {
      frequency[char] = 1;
      result.push(char);
    }
  }

  return result.sort();
};
console.log(removeDuplicate("zasds")); //a b s z
console.log(removeDuplicate("ccbabacc")); // a b c
