const score = 400
console.log(score) // 400

const score2 = new Number(500) // creating a number object using the Number constructor
console.log(score2) // [Number: 500]
console.log(typeof score2) // object
console.log(score2.toString()) // 500 toString method is used to convert a number to a string. It returns a new string representation of the number. The original number remains unchanged.
console.log(score2.toFixed(2)) // 500.00 toFixed method is used to format a number with a specified number of decimal places. It takes one argument: the number of decimal places to include. The original number remains unchanged.

console.log(score2.toString().length) // 3 toString method is used to convert a number to a string. It returns a new string representation of the number. The original number remains unchanged. Then length property is used to get the length of the string representation of the number.

 
console.log(score2.toPrecision(4)) // 500.0
console.log(score2.toPrecision(2)) // 5e+2

const score3 = 1000.789
console.log(score3.toExponential(2)) // 1.00e+3 toExponential method is used to format a number in exponential notation. It takes one argument: the number of decimal places to include. The original number remains unchanged.
console.log(score3.toPrecision(5)) // 1000.8 toPrecision method is used to format a number to a specified precision. It takes one argument: the number of significant digits to include. The original number remains unchanged.

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN')) // 1,00,000 toLocaleString method is used to format a number according to the locale and formatting options. It returns a new string representation of the number. The original number remains unchanged.

// Maths  library in JavaScript provides various mathematical functions and constants. Some of the commonly used methods are:

console.log(Math.PI) // 3.141592653589793
console.log(Math.round(4.6)) // 5 round method is used to round a number to the nearest integer.
console.log(Math.ceil(4.2)) // 5 ceil method is used to round a number up to the nearest integer.
console.log(Math.floor(4.8)) // 4 floor method is used to round a number down to the nearest integer.
console.log(Math.abs(-5)) // 5 abs method is used to get the absolute value of a number.
console.log(Math.pow(2, 3)) // 8 pow method is used to raise a number to a power.
console.log(Math.sqrt(16)) // 4 sqrt method is used to get the square root of a number.
console.log(Math.min(1, 2, 3, 4, 5)) // 1 min method is used to get the minimum value from a set of numbers.
console.log(Math.max(1, 2, 3, 4, 5)) // 5 max method is used to get the maximum value from a set of numbers.
console.log(Math.random()) // random method is used to generate a random number between 0 (inclusive) and 1 (exclusive).
console.log(Math.floor(Math.random() * 10)) // random number between 0 and 9

console.log(Math.floor(Math.random() * 100)) // random number between 0 and 99

const randomNum = Math.floor(Math.random() * 100) + 1 // random number between 1 and 100
console.log(randomNum)

const minNum = 10
const maxNum = 20
const randomNumInRange = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum // random number between minNum and maxNum
console.log(randomNumInRange)