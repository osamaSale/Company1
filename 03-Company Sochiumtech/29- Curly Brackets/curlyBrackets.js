// [30] //  given a string of curly brackets return true if every open CB have an close one else return false.(the string have another characters than the brackets)
const curlyBrackets = (str) => {
  let open = [];
  const openBrackets = {
    "(": true,
    "[": true,
    "{": true,
    "A": true,
  };
  const closeBrackets = {
    ")": "(",
    "]": "[",
    "}": "{",
    "A": "Z",
  };
  let word = str.split("");
  for (let i = 0; i < word.length; i++) {
    if (openBrackets[word[i]]) {
      open.push(word[i]);
    } else if (closeBrackets[word[i]] && open.pop() !== closeBrackets[word[i]]) {
      return false;
    }
  }
  return true;
};
console.log(curlyBrackets("[]")); // true
console.log(curlyBrackets("[{()}])"));
console.log(curlyBrackets("A[{()})Z"));
