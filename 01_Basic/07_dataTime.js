// // date 
// let  myDate = new Date()
// console.log(myDate.toDateString()) // Mon Mar 13 2023 10:30:45 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleString()) // Mon Mar 13 2023 10:30:45 GMT+0530 (India Standard Time)
// console.log(myDate.toISOString()) // 2023-03-13T05:00:45.000Z


// const myDate2 = new Date("2023-03-13T05:00:45.000Z")
// console.log(myDate2.toDateString()) // Mon Mar 13 2023
// console.log(myDate2.toLocaleString()) // Mon Mar 13 2023 10:30:45 GMT+0530 (India Standard Time)
// console.log(myDate2.toISOString()) // 2023-03-13T05:00:45.000Z

// console.log(typeof myDate) // object   key value pair ---> object is the data type of the Date object in JavaScript. It indicates that myDate is an instance of the Date class, which is used to work with dates and times in JavaScript.

// let myCreatedDate = new Date(2026 , 9 , 17)
// console.log(myCreatedDate) // Sat Oct 17 2026 00:00:00 GMT+0530 (India Standard Time)   
// console.log(myCreatedDate.toDateString()) // Sat Oct 17 2026
// console.log(myCreatedDate.toLocaleString()) // 10/17/2026, 12:00:00 AM
// console.log(myCreatedDate.toISOString()) // 2026-10-16T18:30:00.000Z

// let myCreatedDate2 = new Date("10-17-2026")
// console.log(myCreatedDate2.toLocaleString()) // 17/10/2026, 12:00:00 AM


let newDate = new Date()
console.log(newDate.getTime()) // 1678681845000 getTime method is used to get the number of milliseconds since January 1, 1970, 00:00:00 UTC. It returns a number representing the time value of the date object. The original date object remains unchanged.
console.log(newDate.getFullYear()) // 2023 getFullYear method is used to get the year of a date object. It returns a four-digit number representing the year. The original date object remains unchanged.
console.log(newDate.getMonth()) // 2 getMonth method is used to get the month of a date object. It returns a zero-based index representing the month (0 for January, 1 for February, and so on). The original date object remains unchanged.
console.log(newDate.getDate()) // 13 getDate method is used to get the day of the month of a date object. It returns a number representing the day of the month (1 