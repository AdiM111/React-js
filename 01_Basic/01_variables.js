const accountId = 123456;
let accountEmail = "Aditya@gmail.com";
var accountPassword = "Aditya#2026";

accountCity = "Bangalore";
let accountState

//accountId = 789012; // This will throw an error because accountId is a constant and cannot be reassigned.

accountEmail = "aditya_updated@gmail.com";
accountPassword = "Aditya#2027";
accountCity = "Mumbai";

console.log(accountId);

/* 
prefer not to use var as it has function scope and can lead to unexpected behavior. Use let or const instead for block scope.
*/
console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);