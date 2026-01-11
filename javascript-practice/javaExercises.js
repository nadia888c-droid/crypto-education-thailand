// 1.
//The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
// You are given a variable celsius representing a temperature in Celsius. 
// Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature.
// Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.

function convertCtoF(celsius) {
  let fahrenheit;
  fahrenheit = celsius * 9 / 5 + 32;
  return fahrenheit;

}

convertCtoF(30);

//2.Reverse the provided string and return the reversed string.

function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString('hello');


//3. return the factorial of the provided integer.
//If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
//Factorials are often represented with the shorthand notation n!
//For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
//Only integers greater than or equal to zero will be supplied to the function.

function factorialize(num) {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result = result * i;
  }

  return result;
}

//4.Return the length of the longest word in the provided sentence.

function findLongestWordLength(str) {
  const words = str.split(' ');
  let longest = 0;

  for (let word of words) {
    if (word.length > longest) {
      longest = word.length;
    }
  }

  return longest;
}


//5.Return an array consisting of the largest number from each provided sub-array. 
//For simplicity, the provided array will contain exactly 4 sub-arrays.
//Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let max = arr[i][0];

    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > max) {
        max = arr[i][j];
      }
    }

    result.push(max);
  }

  return result;
}


//6.Check if a string (first argument, str) ends with the given target string (second argument, target).
//This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
// But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
  return str.slice(-target.length) === target;
}


//7. Repeat a given string str (first argument) for num times (second argument). 
// Return an empty string if num is not a positive number. 
// For the purpose of this challenge, do not use the built-in .repeat() method.


function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return '';
  }

  let result = '';

  for (let i = 0; i < num; i++) {
    result += str;
  }

  return result;
}


//8. Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
// Return the truncated string with a ... ending.

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + '...';
  }

  return str;
}


//9. Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. 
// This means that given an element x, the 'truth test' is passed if func(x) is true. 
// If no element passes the test, return undefined.

function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}


//10.Check if a value is classified as a boolean primitive. Return true or false.
//Boolean primitives are true and false.

function booWho(bool) {
  return typeof bool === 'boolean';
}