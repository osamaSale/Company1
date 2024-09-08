//  Write a program that checks if this even number returns true and otherwise returns false

const even = (num) => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
const odd = (num) => {
  if (num % 2 === 1) {
    return true;
  } else {
    return false;
  }
};
const oddArray = (arr) => {
  let result = [];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] % 2 === 0) {
      result += arr[index];
    }
  }
  return result;
};

//Write a function that returns the number of unique items in an array

function uniqueItems(a) {
  // YOUR CODE HERE

  var newArr = [];
  for (var i = 0; i < a.length; i++) {
    if (newArr.indexOf(a[i]) === -1) {
      newArr.push(a[i]);
    }
  }
  return newArr;
}

/* 
Examples:
uniqueItems([1, 1, 1, 1, 1]) // => 1
uniqueItems([3, 3, 5, 3]) // => 2
uniqueItems([5, 1, 1, 5, 1]) // => 2
uniqueItems([1, 6, 7]) // => 3
uniqueItems([1, 2, 3, 1, 2, 3]) // => 3
uniqueItems([5, 1, 2, 2, 1, 5]) // => 3
uniqueItems([5, 77, 1, 3]) // => 4
*/

// Write a function that reverses the characters of every word of a sentence.
// Input sentences contain only English
const reverses = (str) => {
  let out = "";
  var english = /^[A-Za-z0-9]*$/;
  let word = str.split(" ").reverse();
  for (let index = 0; index < word.length; index++) {
    if (english.test(word[index])) {
      out += word[index];
    }
  }
  return out;
};

reverses("I Love Code"); // => 'edoC evoL I'
reverses("Hello World"); // => 'dlroW olleH'
reverses("How are you?"); // => '?uoy era woH'

// Write a function that returns true if a number is a power of 2, and false other wise.
const isPowerOfTwo = (num) => {
  if (num % 2 !== 0) {
    return false;
  } else {
    return true;
  }
};
/* 
Examples:
isPowerOfTwo(0) // => 'NO'  
isPowerOfTwo(1) // => 'YES'  
// I am sure not a typo 1 => YES

isPowerOfTwo(2) // => 'YES'
isPowerOfTwo(4) // => 'YES'
isPowerOfTwo(6) // => 'NO'
isPowerOfTwo(11) // => 'NO'
isPowerOfTwo(16) // => 'YES'
isPowerOfTwo(18) // => 'NO'
isPowerOfTwo(24) // => 'NO'
isPowerOfTwo(25) // => 'NO'
isPowerOfTwo(28) // => 'NO'
isPowerOfTwo(32) // => 'YES'
isPowerOfTwo(63) // => 'NO'
isPowerOfTwo(64) // => 'YES'
isPowerOfTwo(1023) // => 'NO'
isPowerOfTwo(1024) // => 'YES'
*/

isPowerOfTwo(11 / 2);

// Write a function that returns the number of occurrences of the most frequent character in a sentence

const getMax = function (str) {
  let max = 0,
    maxChar = "";
  str.split("").forEach(function (char) {
    if (str.split(char).length > max) {
      max = str.split(char).length;
      maxChar = char;
    }
  });
  return maxChar;
};
getMax("3 5 5 385"); //5;

// Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length.

/*
What is Responsive Web Design?
Responsive web design makes your web page look good on all devices.

Responsive web design uses only HTML and CSS.

Responsive web design is not a program or a JavaScript.
*/

/*
What is the Big O
 is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity

*/

/*
The names of the packages to deal with the database ?

s a schema object that groups logically related PL/SQL types, variables, constants, subprograms, cursors, and exceptions. A package is compiled and stored in the database, where many applications can share its contents

*/

function longestWord(sen) {
  let out = "";
  let word = sen.split(" ");
  for (let index = 0; index < word.length; index++) {
    if (word[index].length > out.length) out = word[index];
  }
  return out;
}

/* 
Examples:
longestWord('lol time'); // => 'time'
longestWord('I love cats'); // => 'love'
longestWord('coding is awesome'); // => 'awesome'
longestWord('hello world'); // => 'hello'
*/

// Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.

function longestWord_2(sen) {
  if (sen.length === 0) {
    return "there are 0 words";
  }

  let out = "";
  let word = sen.split(" ");
  for (let index = 0; index < word.length; index++) {
    if (word[index].length > out.length) out = word[index].replace(/[^a-zA-Z ]/gi, "");
  }
  return out;
}

/* 
Examples:
longestWord_2('lol!- time.'); // => 'time'
longestWord_2('I** love, cats'); // => 'love'
longestWord_2('coding&& is awesome'); // => 'awesome'
longestWord_2('hello|| world'); // => 'hello'
*/

// Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.

function firstReverse(str) {
  // YOUR CODE HERE
  let out = "";
  let word = str.split(" ").reverse();
  for (let index = 0; index < word.length; index++) {
    out += word[index];
  }
  return out;
}

/* 
Examples:
firstReverse('I Love Code'); // => 'edoC evoL I'
firstReverse('Hello World'); // => 'dlroW olleH'
firstReverse('How are you?'); // => '?uoy era woH'
*/

/*  
Have the function usernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.

If the username is valid then your program should return the string true, otherwise return the string false.
*/

function usernameValidation(str) {
  // YOUR CODE HERE
  let word = /^([a-z0-9]{5,})$/;
  if ((str.length >= 4 && str.length <= 25) || str.startsWith("a") || word.test(str) || str.match(/[A-Za-a/]/)) {
    return true;
  }
  return false;
}

/* 
Examples:
usernameValidation('aa_'); // => false
usernameValidation('u__hello_world123');// => true
*/

// Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.

function findIntersection(strArr) {
  let arr1 = strArr[0].split(", ");
  let arr2 = strArr[1].split(", ");
  let result = arr1.filter((x) => arr2.find((arr1) => arr1 === x));
  return result.length > 0 ? result.join(",") : "false";
}

/* 
Examples:
findIntersection(['1, 3, 4, 7, 13', '1, 2, 4, 13, 15']); // => '1,4,13'
findIntersection(['1, 3, 9, 10, 17, 18', '1, 4, 9, 10']); // => '1,9,10'
*/

// Write a function that returns the sum of odd numbers in an array.

function SumOddNumber(arr) {
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
      sum += arr[i];
    }
  }
  return sum;
}

/* 
Examples:
SumOddNumber([1, 2, 3, 4, 5]) // => 9
SumOddNumber([1, 5, 3, 4, 5]) // => 14
SumOddNumber([12, 2, 3, 4, 5, 0]) // => 8
*/

/*  
9 - Write a function that returns the length of the longest sequence of 1s in an array of 1s and 0s.
*/

function longestSequence(nums) {
  // YOUR CODE HERE
  let largestCount = 0;
  let currentCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      currentCount = 0;
    } else {
      currentCount++;
    }
    if (currentCount > largestCount) largestCount = currentCount;
  }
  return largestCount;
}
//0001110000

/* 
Examples:
longestSequence([0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1]) // => 4
longestSequence([1, 1, 0, 1, 1, 0, 1, 0, 1, 1]) // => 2
longestSequence([1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1]) // => 3
longestSequence([1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1]) // => 4
longestSequence([1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1]) // => 5
longestSequence([1, 0, 0, 1]) // => 1
longestSequence([0, 0, 0, 0]) // => 'There is no one sequenced'
*/

/*  
Write a function that returns the number of occurrences of the most frequent character in a sentence.
*/

function timesOfMostFreqChar(arr) {
  // YOUR CODE HERE

  if (arr.length === 0) {
    return "There is no one sequenced";
  }
  let count = 1;
  let max = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] == arr[i - 1]) {
      count++;
    } else {
      if (count > max) {
        max += count;
      }
      count -= 1;
    }
  }

  if (count > max) return count;
  else return max;
}

/* 
Examples:
timesOfMostFreqChar('hello world') // => 3
answer1('hello world lol') // => 5
answer1('hello world lol woooow') // => 7
answer1('hello world lol wow www.com') // => 6
*/

// Write a function that reverses the characters of every word of a sentence. Input sentences contain only English letter and space characters.

function reverseEachWord(str) {
  // YOUR CODE HERE
  var arr = str.split("");
  var english = /^[A-Za-z0-9]*$/;
  var output = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    //if (english.test(arr[i])) {
    output.push(arr[i]);

    // }
  }
  return output.join("");
}

/* 
Examples:
reverseEachWord("This is a test") // => "sihT si a tset"
reverseEachWord("Lets code guys") // => "steL edoc syug"
reverseEachWord("Jouza admire Fried Chicken") // => "azuoJ erimda deirF nekcihC"
*/

/*  
Write a function that calculates the largest possible sum of any n consecutive numbers in an array arr of integers (where n ≥ 1).
*/

function largestPossibleSum(arr, windowSize) {
  // YOUR CODE HERE
  if (windowSize > arr.length) return null;
  let max = -Infinity;
  for (let i = 0; i + windowSize - 1 < arr.length; i++) {
    let value = arr[i];
    for (let j = 1; j < windowSize; j++) {
      value += arr[i + j];
    }
    if (max < value) {
      max = value;
    }
  }
  return max;
}

/* 
largestPossibleSum([10, 2, 3, 4, 2, 6, 8], 1) // => 10
Examples:
largestPossibleSum([10, 2, 3, 4, 2, 6, 8], 2) // => 14 
largestPossibleSum([10, 2, 3, 4, 2, 6, 8], 3) // => 16 
largestPossibleSum([10, 2, 3, 4, 2, 6, 8], 4) // => 20 
largestPossibleSum([10, 2, 3, 4, 2, 6, 8], 5) // => 23 

largestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 1) // => 10 
largestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 2) // => 14 
largestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 3) // => 22 
largestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 4) // => 26 
largestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 5) // => 29 


largestPossibleSum([10, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 1) // => 10 
largestPossibleSum([10, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 2) // => 19 
largestPossibleSum([10, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 3) // => 22 
largestPossibleSum([5, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 4) // => 32 
largestPossibleSum([5, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 5) // => 36 
*/

/*  
Given an array of negative/positive integers, return the element in the center position of the array.
If the array has an even number of elements, return the average of the two middle elements instead.
*/

function ArrayMiddle(arr) {
  // YOUR CODE HERE
  return arr[Math.floor(arr.length / 2)];
}

/* 
Examples:
ArrayMiddle([200,5,100]) // => 5
ArrayMiddle([2,3,2,3,2]) // => 2
ArrayMiddle([2,3]) // => 2.5
*/

/*  
Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings.
Your function should return the common characters in the same order that they appear in the first argument. 
Do not return duplicate characters and ignore whitespace in your returned string.
*/

function commonCharacters(s1, s2) {
  // YOUR CODE HERE
  var count = 0;
  var str = "";
  for (var i = 0; i < s1.length; i++) {
    if (s2.indexOf(s1[i]) > -1) {
      count++;
      s2 = s2.replace(s1[i], "");
    }
  }

  return count;
}

/* 
Examples:
commonCharacters('abc', 'abc') // => 'abc'
commonCharacters('What is love?', "Baby don't hurt me") // => 'hatoe'
commonCharacters('Riding on a buffalo makes me more approachable','so what') // => 'oash'
*/

/*  
Find the first item that occurs an even number of times in an array.
*/

function evenOccurrence(arr) {
  // YOUR CODE HERE
  let output = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] % 2 == 0) output = arr[index] = Math.max(arr[index]);
  }
  return output;
}

/* 
Examples:
evenOccurrence([1,2,6,6]) // => 6
evenOccurrence([1,2,9,8,8,6,6]) // => 8 
evenOccurrence([1,9,7,3,6,6,8,9,9]) // => 6
*/

function firstNonRepeatedCharacter(string) {
  // YOUR CODE HERE
  if (string === "") {
    return "sorry";
  }
  let out;
  for (let index = 0; index < string.length; index++) {
    out = string.charAt(string[index]);
  }
  return out;
}

/* 
Examples:
firstNonRepeatedCharacter('ABCDBIRDUP') // => 'A'
firstNonRepeatedCharacter('ALABAMA') // => 'L'
firstNonRepeatedCharacter('Uber for horses') // => 'U'
*/

/*  
Given an integer, n, return n! (n factorial)
5! = 5 * 4 * 3 * 2 * 1
*/

function factorial(num) {
  // YOUR CODE HERE
  if (!num) {
    return 1;
  }
  return num * factorial(num - 1);
}

/* 
Examples:
factorial(1) // => 1
factorial(3) // => 6
factorial(4) // => 24
*/

/*  
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.
*/

function largestProductOfThree(array) {
  // YOUR CODE HERE
  const arr = array.sort();
  result = 1;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > 0) {
      result *= Math.max(arr[index]);
    }
  }
  return result;
}

/* 
Examples:
largestProductOfThree([2, 1, 3, 7]) // => 42
largestProductOfThree([0, 2, 3]) // => 0
largestProductOfThree([2, 3, 5]) // => 30
*/

/*  
Given a string, remove any characters that are not unique from the string.
*/

function onlyUnique(str) {
  var result = "";
  var freq = [];
  str.split(" ");
  for (i = 0; i < str.length; i++) {
    let char = str[i];
    if (freq[char]) {
    } else {
      freq[char] = 1;
      result = result + char;
    }
  }
  return result;
}

/* 
Examples:
onlyUnique('hello there') // => 'o tr'
onlyUnique('xyz') // => 'xyz'
onlyUnique('iiii') // => ''
*/

/*  
 Write a function that takes as its input a string and returns an array of 
 arrays as shown below sorted in descending order by frequency and then by 
 ascending order by character.
*/

function characterFrequency(input) {
  var count = {};
  input.split("").forEach((s) => {
    count[s] ? count[s]++ : (count[s] = 1);
  });
  return count;
}

/* 
Examples:
characterFrequency('mississippi') // =>  [ ['i', 4],['s', 4],  ['p', 2],  ['m', 1]  ]
characterFrequency('miaaiaaippi') // =>  [ ['a', 4],  ['i', 4],  ['p', 2],  ['m', 1] ]
*/




/*  
Given a properly formatted URL, return the query string data as an array of key-value pairs, in the order that they appear.
If the url does not contain a query string, return undefined
*/
//url.indexOf('?')
function parseQueryString(queryString ) {
  let p = {}, queries, temp,i,l;

  // Split into key/value pairs
  queries = queryString.split("&").indexOf('?')

  // Convert the array of strings into an object
  for (i = 0, l = queries.length; i < l; i++ ) {
      temp = queries[i].split('=');
      p[temp[0]] = temp[1];
  }

  return p;
}


/* 
Examples:
parseQueryString("http://example.com?a=hello&b=99") // [ [ "a", "hello" ], [ "b", "99" ] ]
parseQueryString("http://example.com?msg=hello%20world") // [ [ "msg", "hello world" ] ]
parseQueryString("http://example.com") // undefined
*/


/*  
Write a JavaScript function to check whether an `input` is an array or not.
*/
//
//Array.isArray([])
function is_array(num) {
  return Array.isArray(num);
  }


/* 
Examples:
is_array('w3resource') => false
is_array ([1, 2, 4, 0]) // => true

*/


/*  
Write a JavaScript function to clone an array.
*/

function array_Clone(arr) {
  let clone = arr.concat();
  return clone
}
/* 
Examples:
array_Clone ([1,2,3]) // =>[1,2,3]
array_Clone ([1,9,8]) // =>[1,9,8]
*/