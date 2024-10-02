/* Lösning till Uppgift 7 - villkor och klockslag. Av Linn Fällman, 2024 */

"use strict";

let date = new Date(); //Nytt date-objekt för att få ut datum och tid
const testDate = new Date("September 11, 2024 10:15:00"); //nytt specificerat datum jag använde för testning (kan raderas)

let time = date.getHours(); //getHours kopplat till date-objektet för att få ut den relevanta infon timmar 
// let time = testDate.getHours(); => Igen grejer jag använt för att testa, så kopplat till test-datum

if (time > 5 && time < 12) { //If sats för att se om timmen är inom ramarna för förmiddag
    console.log("Det är förmiddag");
} else if (time > 11 && time < 18) { //Else if, om den annars är inom ramarna för eftermiddagen
    console.log("Det är eftermiddag")
} else {                               //Om den inte är det heller måste det vara kväll/natt så den behöver inte specificeras
    console.log("Det är kväll/natt")
}



