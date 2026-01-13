"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(n1, n2, showResult, phrase) {
    //if (type of n1 !== 'number' || typeof n2 !== 'number') {
    // throw new error('Incorrect input!');
    //}
    return n1 + n2;
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1;
number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = "Result is: ";
add(number1, number2, printResult, resultPhrase);
