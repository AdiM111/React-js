const name = "Aditya"
const repoCount = 50
// console.log(name + repoCount + " Value") // Aditya50 Value old method of concatenation

// backticks are used to create template literals, which allow for easier string interpolation and multi-line strings.
const repoInfo = `Hello ${name} you have ${repoCount} repos`
//console.log(repoInfo) // Hello Aditya you have 50 repos

const gameName = new String("Gta") // creating a string object using the String constructor
//console.log(gameName) // [String: 'Gta']
// console.log(gameName[0]) // G
// console.log(gameName.length) // 3

//console.log(typeof gameName) // object
// console.log(gameName.toUpperCase()) // GTA uppercase method is used to convert a string to uppercase letters. It returns a new string with all the characters in uppercase. The original string remains unchanged.
// console.log(gameName.toLowerCase()) // gta 
// console.log(gameName.charAt(1)) // t charAt method is used to get the character at a specified index in a string. It takes one argument: the index of the character to retrieve. The index is zero-based, meaning the first character has an index of 0. If the index is out of range, it returns an empty string. The original string remains unchanged.

// console.log(gameName.indexOf("t")) // 1 indexOf method is used to find the index of the first occurrence of a specified value in a string. It takes one argument: the value to search for. If the value is found, it returns the index of the first occurrence; otherwise, it returns -1. The original string remains unchanged.
// console.log(gameName.substring(0, 2)) // Gt substring method is used to extract a portion of a string between two specified indices. It takes two arguments: the starting index (inclusive) and the ending index (exclusive). The original string remains unchanged.

// console.log(gameName.slice(1 , 4)) // ta slice is used to extract a section of a string and return it as a new string. It takes two arguments: the starting index (inclusive) and the ending index (exclusive). The original string remains unchanged.

// console.log(gameName.replace("Gta", "Gta5")) // Gta5 replace is used to replace a specified value with another value in a string. It takes two arguments: the value to be replaced and the new value. The original string remains unchanged.

// console.log(gameName.includes("Gta")) // true includes is used to check if a string contains a specified value. It returns true if the value is found, otherwise false.

// console.log(gameName.split("")) // [ 'G', 't', 'a' ] split is used to split a string into an array of substrings based on a specified separator. It takes one argument: the separator. The original string remains unchanged.

 console.log(gameName.trim()) // Gta trim is used to remove whitespace from both ends of a string. It does not affect the original string, but returns a new string with the whitespace removed.


// more string methods can be found at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String



