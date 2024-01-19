let js = 'amazing';
// if (js === 'amazing') alert('JavaScript is Fun!');
console.log(40 + 8 + 23 - 10);


//! value is a piece of data, the most fundamental unit of information in programming. Value has a type not variable! Variable simply stores the value which has a type

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

const description = "Does " + firstName + " who is " + age + " years old really likes JS? --> : " + javaBoolean
console.log(description);

//! Or build a template literals
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

const secondDescription = `Does ${firstName} who is ${age} years old really likes JS? --> : ${javaBoolean}`
console.log("Template string example:",secondDescription); 

// If you need multiple line strings, template literals is easier
console.log("Multiple \n\ line \n\ strings");

console.log(`Multiple
line
strings`);

//! MDN operator precedence (which operator is performed first)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

const now = 2024;
console.log(now - 1991 > now - 2018);

// Simple logic syntax for java
// use the snippet ifelse + tab
const ageOfSarah = 25
let eligibility;
if (ageOfSarah >= 18) {
    eligibility = true;
    console.log(`Sarah can start driving license`)
    } else {
        console.log(`Sarah is too young`);
        eligibility = false;
    }
console.log(`Is Sarah eligible for a driving license: ${eligibility}`);

// Type conversion and coercion

// Coercion happens when JS needs to deal with different types
// Conversions can only be to a number, to a string or to a boolean

// Some conversions
const inputYear = '1991'
Number(inputYear) // this will not modify the original data
console.log(typeof inputYear);

console.log(Number(`Jonas`)); // trying to c

console.log(String(23));

// "+" operation does String(object)
console.log("I am "+ 28 +" years old"); 

// "-" "*" and "/" operator does Number(Object)
console.log("23" - "10" - 3);  // 10
console.log("23" * "2");  // 26

//! 5 falsy values: 0, '', undefined, null, NaN
// the rest would be converted to true

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(`Jonas`)); // true
console.log(Boolean({})); // true
console.log(Boolean(``)); // falseconsole.log(object);

if (0) {

} else {
    console.log("This will be executed");
}

// There are two equality operators "==" and "===". first one is the loose equality operator (18 == "18" --> true), however second one is the strict equality operator (18 == "18" --> false)

// As a general rule use strict equality operator because loose equality operator may introduce bugs

const comparison = "18";
if (comparison === 18) console.log(`Strict equality operator`);
(comparison === 18) && console.log(`Strict equality operator`);

if (comparison == 18) console.log(`Loose equality operator`);
(comparison == 18) && console.log(`Loose equality operator`);


//! Use alert and prompt (output(), input())to interact with the client side


// Logical operators
// and --> &&, or --> ||, not --> !

console.log(true && false);
console.log(true || false);
console.log(true && !false);

// Conditional operators are
// if-else statements, switch, the conditional (ternary) operator

//! Ternary operator syntax --> condition ? execution1 : execution2
//! if condition is true --> execution 1, else execution 2
age = 23
age >= 18 && age <=60 ? console.log(`I can drink wine`) : console.log(`I should drink water`);

// Above is an expression that produces value, so this value can be assigned to a variable
const drink = age >= 18 ? `wine` : `water`;
console.log(drink); 
// Or this value can directly be used
console.log(`I like to drink ${age >= 18 ? `wine` : `water`}`);

// On top of normal way of using switch statement, you can use it also below way.

// Log if you can satisfy the condition1 or condition2

const key = "condition1"

switch (key) {
    case "condition1":
    case "condition2":
        console.log(`You can satisfy ${key}`);
        break;
}
