const findSum = function(array) {
  let sum = array.reduce(function(a, b) {
    return a + b;
  }, 0);
  return sum;
};

const findFrequency = function(array) {
  
};

const isPalindrome = function(str) {
let backwardsString = str.split('').reverse().join('');
  if (str === backwardsString) {
    return true;
  } else {
    return false;
  }
};

const largestPair = function(array) {
  // your code here - don't forget to return a number!
};

const removeParenth = function(str) {
let newString = str.replace(/ *\([^]*\) */g, '');
  return newString;
};

const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
};
