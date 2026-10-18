// const marvelHeroes = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye"];
// const dcHeroes = ["Batman", "Superman", "Wonder Woman", "Flash", "Green Lantern", "Aquaman"];

// const allHeroes = marvelHeroes.concat(dcHeroes);
// console.log(allHeroes);

// const allHeroesSpread = [...marvelHeroes, ...dcHeroes]; // spread operator is used to combine two or more arrays into one
// console.log(allHeroesSpread);

const another_array = [1, 2, [4,5,6],7 ,[6,7,],[  4, 5]];
// console.log(another_array);
const flattened_array = another_array.flat(Infinity); // flat() method is used to flatten an array

// console.log(flattened_array);

console.log(Array.isArray("Aditya"))
console.log(Array.from("Aditya")) // Array.from() method is used to create a new array from a string or an array-like object        
console.log (Array.from({name: "Aditya"})) // Array.from() method is used to create a new array from an object with a length property
 