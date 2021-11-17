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

const scoreScrabble = function(str) {
  let letters = {
    a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, n: 1, r: 1, s: 1, t: 1, d: 2, g: 2, b: 3, c: 3, m: 3, p: 3, f: 4, h: 4, v: 4, w: 4, y: 4, k: 5, j: 8, x: 8, q: 10, z: 10 },
   sum = 0, i;
  str = str.toLowerCase();
    for (i = 0; i < str.length; i++) {
        sum += letters[str[i]] || 0; 
    }
    return sum;
};
