// [29] given an array of string return the matual characters between them
// [29]  Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings.
const CommonCharacter = (str1, str2) => {
    let result = "";
    for (let i = 0; i < str1.length; i++) {
      if (result.indexOf(str1[i]) === -1) {
        result += str1[i];
      }
    }
    return result;
  };
  console.log(CommonCharacter("osama", "osamp")); // osam