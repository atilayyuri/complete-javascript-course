// Activating strict mode
'use strict';

// Strict mode will help you identify errors in your code that you might be oveerloking. It will also prevent you from using certain elements of the language that are considered to be error-prone or poorly designed.
/*

// Use below part to test strict mode functionality
let hasDriversLicense = false;
let passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) {
    console.log(`I can drive`);
}
*/


// Functions
function logger(params) {
    console.log(`I am logging ${params}`);
}

// Calling / running / invoking function
logger(`Hello, World!`);

// Function declaration
function calcAge1(birthYear) {
    return 2024 - birthYear;
}

const myAge = calcAge1(1995)
if (typeof myAge === "number") console.log(`My age is a number`); 

// Arrow function
// const calcAge2 = birthYear => 2024 - birthYear;
const calcAge2 = birthYear => {return 2024 - birthYear};
const anotherAge = calcAge2(1995);
console.log(anotherAge);


// Arrays
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
const friends = [`Michael`, `Steven`, `Peter`];
const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);
console.log(Object.keys(friends));

const person = [`max`, `mustermann`, 2024-1993, friends]
console.log(person);

// Array methods
friends.push(`Jay`); // add element to the end of array
friends.unshift(`John`); // add element to the beginning of array

friends.pop(); // remove element from the end of array
friends.shift(); // remove element from the beginning of array

friends.indexOf(`Steven`); // returns the index of the element in the array --> python "index"
friends.includes(`Steven`); // returns true if the element is in the array, otherwise returns false --> python "in"
