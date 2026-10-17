"use strict"; // This line enables strict mode in JavaScript, which helps catch common coding mistakes and "unsafe" actions such as defining global variables unintentionally.

//alert(3+3); // we are using nodejs so alert will not work here. It is used in browser environment to show a popup message.
let age = 25
let name = "Aditya"
let isloggedIn = true

// number => 2 to power of 53
//bigint 
// string => "Aditya" or 'Aditya' or `Aditya`
//boolean => true or false
//null => when we want to clear the value of a variable we can assign null to it.
//undefined => when we declare a variable but do not assign any value to it, it is undefined by default.
//symbol => used to create unique identifiers for objects. It is a primitive data type introduced in ES6.
// object => used to store collections of data and more complex entities. It is a non-primitive data type.

/*
console.log(typeof age); // number
console.log(typeof "Aditya"); // string
console.log(typeof isloggedIn); // boolean
console.log(typeof null); // object (this is a known quirk in JavaScript)
console.log(typeof undefined); // undefined
*/
// conversion operations 
let score = "33abc"
//console.log(typeof score); // string
let convertedScore = Number(score);
//console.log(typeof convertedScore); // number
//console.log(convertedScore);

let someNumber = 100
let convertedString = String(someNumber);
//console.log(typeof convertedString); // string
//console.log(typeof convertedString); 


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn);
//console.log(booleanIsLoggedIn); // true
//console.log(typeof booleanIsLoggedIn); // boolean




