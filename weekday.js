const prompt = require('prompt-sync')({sigint: true});

let num = Number(prompt(`Enter a number for the day of the week: `));
console.log(num); 


if(num === 1){ 
    console.log("Monday")}
 else if (num === 2){ 
    console.log("Tuesday")}
else if (num === 3){ 
    console.log("Wednesday")}         
else if (num === 4){ 
    console.log("Thursday")}
else if (num === 5){ 
    console.log("Friday")}
else if(num ===6){ 
    console.log("Saturday")}
else if (num === 7){ 
    console.log("Sunday")}
else{ 
    console.log("ERROR!")}