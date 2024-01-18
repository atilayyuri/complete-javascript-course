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

let age = 27;

const DESCRIPTION = "Does " + firstName + " who is " + age + " years old really likes JS? --> : " + javaBoolean
console.log(DESCRIPTION);

// Or build a template literals
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

const SECOND_DESCRIPTION = `Does ${firstName} who is ${age} years old really likes JS? --> : ${javaBoolean}`
console.log("Template string example:",SECOND_DESCRIPTION); 

// If you need multiple line strings, template literals is easier
console.log("Multiple \n\
line \n\
strings");

console.log(`Multiple
line
strings`);

// MDN operator precedence (which operator is performed first)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

const now = 2024;
console.log(now - 1991 > now - 2018);