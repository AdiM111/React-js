//Comparison Operators (>, <, ==, ===, >=)

// console.log(2 > 1) // true
// console.log(2 < 1) // false
// console.log(2 >= 1) // true
// console.log(2 <= 1) // false
// console.log(2 == 1) // false
// console.log(2 != 1) // true
// console.log(2 === 1) // false
// console.log(2 !== 1) // true

//String and Number comparison

// console.log("2" > 1) // true
// console.log("02" > 1) // true
// console.log("2" > "12") // true
// console.log("2" > "02") // true "2" > "02" → pehle character "2" aur "0" compare honge; 2 bada hai.
// console.log("2" > "2") // false dono equal hain, isliye false
// console.log("2" >= "2") // true greater than ya equal, isliye true.

// console.log(null > 0) // false Relational comparison mein null number 0 mein convert hota hai.
// console.log(null == 0) // false Loose equality (==) mein null ko normally 0 mein convert nahi kiya jata. null sirf undefined ke barabar hota hai, is special equality rule ke according.
// console.log(null >= 0) // true Relational comparison mein null ka numeric value 0 hota hai.

//Relational comparisons mein undefined number mein convert karne par NaN (Not a Number) milta hai.  undefined ka matlab hai ki value assigned nahi hai, ya value missing hai.

// console.log(undefined > 0) // false
// console.log(undefined < 0) // false
// console.log(undefined == 0) // false
// console.log(undefined === 0) // false === mein type bhi check hota hai. undefined aur 0 ka type alag hai, aur values bhi equal nahi hain.

// Operator	Meaning	                                 Example	Result
// ==	    Value compare, datatype conversion possible	"2" == 2	true
// ===	    Value aur datatype dono compare	            "2" === 2	false

