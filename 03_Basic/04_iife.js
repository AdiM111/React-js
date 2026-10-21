// iife immediately invoke 

(function chai(){   // named IIFE 
    console.log(`DB CONNECTED`);
}) ();

( (name) => {   // normal IIFE
    console.log(`DB CONNECTED TWO ${name}`);
}) ('Atul')