// object literals 

//declare object using object literal syntax

const mySym = Symbol("mySymbol"); // create a symbol
const person = {
    "full name": "Aditya  Maurya", // property with space in name
    age: 25,
    [mySym]: "This is a symbol property", // property with symbol key
    city: "New York"
};
//console.log(person);
//console.log(person["full name"]); // access object property using bracket notation
//console.log(person["age"]); // access object property using bracket notation
//console.log(person[mySym]); // access object property using symbol key

//person.country = "USA"; // add new property to object
//console.log(person);

person.age = 26; // update existing property of object
//console.log(person);

person["full name"] = "Aditya Maurya"; // update existing property of object using bracket notation
//console.log(person);

person.greeting = function() { // add method to object
    console.log(`Hello, my name is ${this["full name"]} and I am ${this.age} years old.`);
}

person.greetingTwo = function() { // add method to object
    console.log(`Hello, this is my city  ${this.city}  `);
}
console.log(person.greeting()); // call method of object
console.log(person.greetingTwo()); // call method of object