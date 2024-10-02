/* Lösning till Uppgift 3 - Upprepningar. Av Linn Fällman, 2024 */


//Skriv ut åttans gångertabell mellan 1-10 till skärmen.

"use strict";

const number = 8; //Const eftersom den inte ska ändras, men som egen variabel eftersom det gör att koden går att återanvända enklare
let sum = 0; //Variabel för summan

for (let i = 1; i <= 10; i++) { //For-loop eftersom vi vet hur många gånger
    sum = number * i; //Räknar ut vad summan är varje varv
    console.log(`${i} * ${number} = ${sum}`); //Skriver ut siffran gånger number (8) är lika med summan 
}

