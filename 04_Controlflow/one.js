// If is a method  

const isUserLoggedIn =  true
const temperature = 41

// if(temperature  < 50 ){
//     console.log("Less Than 50")

// } else{
// console.log("Temperature is greater than 50")
// }
// < , > ,<= , >= , == , != , === , !==

const balance = 1000

// if(balance < 500){
//     console.log("less than 500")
// } else if (balance < 750){
//     console.log("less than 750")
// }  else if (balance < 900){
//     console.log("less than 900")
// }  else  {
//     console.log("less than 1200")
// } 

const userLoggedIn = true
const debitCart = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCart && 2==2){
    console.log("Allow to buy course")
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in ")
}
