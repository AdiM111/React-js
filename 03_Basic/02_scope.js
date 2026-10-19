//scope is means the accessibility of variables, functions, and objects in some particular part of your code during runtime. In JavaScript, there are two types of scope: global scope and local scope.


//Global Scope
// var c = 20; // global scope

let a = 10; // global scope
if (true) {
    let a = 10; // block scope
    const b = 30; // block scope
   // var c = 20; // function scope
}

// console.log(a); // ReferenceError: a is not defined 
// console.log(b); // ReferenceError: b is not defined
// console.log(c); // Output: 20
 
// nested function scope
 
function one(){
    const username = "Aditya"; // local scope
    function two(){
        const password = "1234"; // local scope
        console.log(username); // Output: Aditya
        console.log(password); // Output: 1234
    }
    two();
}
//one();

if(true){
    const username = "Aditya"
    if(username === "Aditya"){
        const website = " Youtube"
       // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)

// console.log(addone(5))

function addone(num){
    return num + 1
}
 
//addTwo(5)

const addTwo = function(num){ 
    return num + 2
}
 