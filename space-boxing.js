const prompt = require('prompt-sync')({sigint: true});
console.log("Welcome to the space boxing please choose the numeber of the planet you wish to fight on.")
console.log( " 1. Venus 2. Mars 3. Jupiter 4. Saturn 5. Uranus 6. Neptune")
let Eweight = Number(prompt(`Enter Earth Weight: `))

let planet = Number(prompt(`Please enter planet you wish to fight on? `))


if(planet === 1){ 
    console.log("Your Fighting weight for Venus is: " + Eweight * 0.78)}
else if(planet === 2){ 
    console.log("Your Fighting weight for Mars is: " + Eweight * 0.39)}
else if(planet === 3){ 
    console.log("Your Fighting weight for Jupiter is: " + Eweight * 2.65)}
else if(planet === 4){ 
    console.log("Your Fighting weight for Saturn is: " + Eweight * 1.17)}  
else if(planet === 5){ 
    console.log("Your Fighting weight for Uranus is: " + Eweight * 1.05)}  
else if(planet === 6){ 
    console.log("Your Fighting weight for Neptune is: " + Eweight * 1.23)}    
 else { 
    console.log("Please Select a Planet number between 1-6")}  
      