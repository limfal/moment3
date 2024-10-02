/* Lösning till Uppgift 5 - konvertering. Av Linn Fällman, 2024 */

"use strict";

// konverterar och skriver ut ett givet nummer i form av timmar och minuter.

let number = 65; //En variabel för att välja siffra

let hours = number / 60; //Siffran delad med 60 för att få ut timmarna, sen i utskriften använde jag Math.floor() för att avrunda neråt till hel timme
let minutes = number % 60; //resten efter att man delat med 60 är antalet minuter

//Här nedan är utskriften
console.log(`${number} => ${Math.floor(hours)} timmar och ${minutes} minuter`);

