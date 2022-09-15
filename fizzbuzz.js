const prompt = require('prompt-sync')({sigint: true});

let num = Number(prompt(`Enter a number: `));
console.log(num);

if (num % 15 === 0){
    console.log("fizzbuzz") 
}                         //Divisble by both (15)-> write fizzbuzz
else if (num % 3 === 0){
    console.log("fizz")  //Divisble by 3 -> write fizz
}
else if (num % 5 === 0){
    console.log("buzz") //Divisble by 5 -> write buzz
}
