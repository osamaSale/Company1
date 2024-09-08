// Check whether two strings contain same characters in same order ?

const checkCharacter1 = (str1, str2) => {
  let s1 = str1[0];
  let s2 = str2[0];

  for (let i = 1; i < str1.length; i++) {
    if (str1[i] != str1[i - 1]) {
      s1 += str1[i];
    }
  }
  for (let i = 1; i < str2.length; i++) {
    if (str2[i] != str2[i - 1]) {
      s2 += str2[i];
    }
  }
  if (s1 === s2) {
    return true;
  } else {
    return false;
  }
};
console.log(checkCharacter1("osama", "osa")); //fales

// [27] check if the string two contain all the character in the first string.

const checkCharacter2 = (str1, str2) => {
  for (let i = 0; i < str1.length; i++) {
    if (str1.indexOf(str2) !== -1) {
      return true;
    } else {
      return false;
    }
  }
};
console.log(checkCharacter2("osama", "o")); //true
console.log(checkCharacter2("osama", "y")); //fales
