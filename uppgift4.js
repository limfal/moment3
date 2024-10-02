/* Lösning till Uppgift 4 - Modulus. Av Linn Fällman, 2024 */

"use strict";

//Skriv ut alla udda tal mellan 3 och 23.

let i = 3; //eftersom vi börjar på 3

while (i <= 23) { //Tog en while för att det är ett villkor alltså under eller lika med 23, hade också kunnat göra tex en for-loop
    if (i % 2 != 0) //Här får vi ut som resten inte är lika med noll (alltså om det är ett udda tal)
    console.log(i); //Om villkoret uppfylls i if-satsen ovanför skrivs i ut, annars inte
    i++;
}
