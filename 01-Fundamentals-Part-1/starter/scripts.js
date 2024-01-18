let js = 'amazing';
// if (js === 'amazing') alert('JavaScript is Fun!');
console.log(40 + 8 + 23 - 10);


// value is a piece of data, the most fundamental unit of information in programming. Value has a type not variable! Variable simply stores the value which has a type

// variable = value

// variable should always start with lower case
let firstName = "Jonas";
console.log(firstName);

// the only two symbols that are allowed during variable declaration is _ or $

//constant variables should be all upper case
const PI = 3.1415;

// type of operator
let javaBoolean = true;
console.log(javaBoolean);
console.log(typeof javaBoolean); // typeof method 

// changing variable (without using let)
javaBoolean = "YES!";

// increasing/decreasing a variable by 1
let population = 200;
population++;
population--;

const DESCRIPTION = "Does " + firstName + " really likes JS? --> : " + javaBoolean

console.log(DESCRIPTION);

// MDN operator precedence (which operator is performed first)
// (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

const now = 2024;
console.log(now - 1991 > now - 2018);