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
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function  --> Function documentation
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
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array   --> Array documentation

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

//! Objects  --> python "dictionary"
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object  --> Object documentation

const anotherPerson = {
    firstName: `Max`,
    lastName: `Mustermann`,
    age: 2024-1993,
    job: `teacher`,
    friends: [`Michael`, `Peter`, `Steven`]
};

console.log('anotherPerson :>> ', anotherPerson);

//! Main difference between below executions are that you can use the dot notation only when you know the name of the property you want to access ahead of time. If you want to compute the property name or if the propert name is a variable, you have to use the bracket notation. 
console.log(anotherPerson.firstName);
console.log(anotherPerson[`firstName`]);

// Bracket notation also enables below functionality
const nameKey = `Name`;
console.log(anotherPerson[`first` + nameKey]);
console.log(anotherPerson[`last` + nameKey]);

// Below means that the object keys have a type of string
const interestedIn = prompt(`What do you want to know about anotherPerson? Choose between firstName, lastName, age, job and friends`);
console.log(anotherPerson[interestedIn]);

// If the key "interestedIn" does not exist in the object this will produce "undefined". Therefore anotherPerson[interestedIn] is a boolean false
if (anotherPerson[interestedIn]) {
    console.log(anotherPerson[interestedIn]);
} else {
    console.log(`Wrong request! Choose between firstName, lastName, age, job and friends`);
}

anotherPerson.location = `Portugal`;
anotherPerson[`twitter`] = `@maxmustermann`;

console.log(`${anotherPerson.firstName} has ${anotherPerson.friends.length} friends, and his best friend is called ${anotherPerson.friends[0]}`);