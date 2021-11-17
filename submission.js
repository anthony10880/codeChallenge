const findSum = function(array) {
  let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
};

/*const findFrequency = function(array) {
  const notWorking;
};*/

const isPalindrome = function(str) {
let clean = (str) => str.toLowerCase();
  let goodStr = clean(str);
  let reverseStr = goodStr.split('').reverse().join('');
  return reverseStr === goodStr;
};

const largestPair = function(array) {
let max=-Infinity;  
    for (let i=0;i<array.length-1;i++){
        max = array[i]*array[i+1]>max ?array[i]*array[i+1]:max;  
    }
    return max;
};

const removeParenth = function(str) {
let newString = str.replace(/ *\([^]*\) */g, '');
  return newString;
};

/*const scoreScrabble = function(str) {
  const notWorking;
  // your code here - don't forget to return a number!
};*/
