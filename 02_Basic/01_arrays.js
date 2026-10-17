// Arrays 

const fruits = ["apple", "banana", "orange"];
console.log(fruits);

const numbers = [1, 2, 3, 4, 5];    
console.log(numbers);


//Array methods 

// numbers.push(6); // adds 6 to the end of the array
// console.log(numbers);

// numbers.pop(); // removes the last element from the array
// console.log(numbers);

// numbers.shift(); // removes the first element from the array
// console.log(numbers);

// numbers.unshift(0); // adds 0 to the beginning of the array 
//  console.log(numbers);   

// console.log(numbers.length); // returns the length of the array
// console.log(numbers.indexOf(3)); // returns the index of the element 3
// console.log(numbers.includes(4)); // returns true if the element 4 is in the array, false otherwise     


//  slice() original array ko change nahi karta, jabki splice() original array ko change karta hai.  and splice methods  Elements add/remove/replace karna

// const number = [10, 20, 30, 40, 50];

// const result = number.slice(1, 4);

// console.log(result);  // [20, 30, 40]
// console.log(number); // [10, 20, 30, 40, 50]


// const results = number.splice(1, 2);

// console.log(results);  // [20, 30]
// console.log(number); // [10, 40, 50]

fruits.splice(1, 0, "kiwi", "mango"); // 0 means no elements removed, 1 element from index 1 and adds "kiwi" and "mango" in its place
console.log(fruits); // ["apple", "kiwi", "mango", "orange"]

fruits.splice(2, 1, "grape"); // removes 1 element from index 2 and adds "grape" in its place
console.log(fruits); // ["apple", "kiwi", "grape", "orange"]



// const newNumbers = numbers.slice(1, 4); // returns a new array with elements from index 1 to 3
// console.log(newNumbers);

// const splicedNumbers = numbers.splice(1, 2); // removes 2 elements from index 1 and returns them as a new array
// console.log(splicedNumbers);
// console.log(numbers); // the original array is modified

// const joinedNumbers = numbers.join(", "); // joins the elements of the array into a string
// console.log(joinedNumbers);
// console.log(typeof joinedNumbers); // returns the type of the joinedNumbers variable
// const reversedNumbers = numbers.reverse(); // reverses the order of the elements in the array
// console.log(reversedNumbers);

// const sortedNumbers = numbers.sort((a, b) => a - b); // sorts the elements of the array in ascending order
// console.log(sortedNumbers);