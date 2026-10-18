//const tinderUser = new Object(); // object constructor SIngleton syntax

const tinderUser = {}; // object literal syntax
tinderUser.id = "123abc";
tinderUser.name = "Aditya Maurya";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "aditya@example.com",
    fullname: {
        userFullName:  {
            fristName: "Aditya",
            lastName: "Maurya"

        }
    },
    isLoggedIn: true
};

// console.log(regularUser.fullname.userFullName.fristName); // access nested object property using dot notation

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

const obj3 = { ...obj1, ...obj2 }; // spread operator to merge objects
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
const obj4 = Object.assign({}, obj1, obj2);
// console.log(obj4); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj5 = { ...obj1, ...obj2, 5: "c" }; // spread operator to merge objects and add new property
// console.log(obj5); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'c' }

const users = [
    {
        id: 1,
        email: "aditya@example.com"
    },
      {
        id: 1,
        email: "aditya@example.com"
    },
      {
        id: 1,
        email: "aditya@example.com"
    },
]

// // users[1].email 
// // console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // get all keys of object
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // get all key-value pairs of object
// console.log(tinderUser.hasOwnProperty("name")); // check if object has a property

//destructuring objects
const { id, name, isLoggedIn } = tinderUser; // destructuring object
console.log(id, name, isLoggedIn); // access destructured properties

const { email } = regularUser; // destructuring object
console.log(email); // access destructured properties

console.log(regularUser.fullname.userFullName.fristName); // access nested object property using dot notation