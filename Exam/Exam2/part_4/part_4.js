/*

PART 4 [Problem Solving]:
Solve the question below:

Write a isABalancedString function that takes a string as an input, 
return 'YES' if the parentheses in the input string are balanced,
return 'NO' if the parentheses in the input string are not balanced,. 

*/

console.log('PART 4');

const isABalancedString = (str1) => {

  let open=[]
  const openBrackets = {
    '(': true,
    '[': true,
    '{': true,
  };
  
  const closedBrackets = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  let word1 = str1.split("")
  for (let i = 0, length = word1.length; i < length; i++) {
    if (openBrackets[word1[i]]) {
      open.push(word1[i]);
      
    } else if (closedBrackets[word1[i]] && open.pop() !== closedBrackets[word1[i]]) {
      return false;
    }
  }
  
  return !open.length;
  
};

/*

Examples:

isABalancedString( '[]' )
=> YES

isABalancedString( '[{()}]' )
=> YES

isABalancedString( '[()]{}{()()}' )
=> YES

isABalancedString( '[{()}])' )
=> NO

isABalancedString( '({()}])' )
=> NO

isABalancedString( '[{)]({()(})' )
=> NO

isABalancedString( '[(){([])[}]()]' )
=> NO

isABalancedString( '[(){([])}({){}}]' )
=> NO

isABalancedString( '[(){([])})' )
=> NO

*/
