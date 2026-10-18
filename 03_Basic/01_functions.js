//Functions is a block of code that can be reused in a program. It is a set of statements that performs a specific task. Functions are used to break down complex problems into smaller, manageable parts. They can take inputs (parameters) and return outputs (results). Functions help in organizing code, improving readability, and promoting code reusability.

//Function Declaration
function greet(name) {
    return "Hello, " + name + "!";
}

// console.log(greet("Aditya")); // Output: Hello, Aditya!

function add(a, b) {
    return a + b;
}

// console.log(add(5, 3)); // Output: 8

//Function Expression
const multiply = function(a, b) {
    return a * b;
};
// console.log(multiply(5, 3)); // Output: 15

//Arrow Function
const divide = (a, b) => {
    return a / b;
};
// console.log(divide(10, 2)); // Output: 5

function calculateCartPrice(...num1) {  // rest parameter to accept multiple arguments
    return num1
}
 //console.log(calculateCartPrice(100 ,200,300,400)); // Output: 100


 