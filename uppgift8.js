/* Lösning till Uppgift 8 - switch-satser. Av Linn Fällman, 2024 */

"use strict";

//Visa vilken veckodag

switch(new Date().getDay()) { //Dagens datum (och veckodag (0-6))
    case 1: //Om veckodagen är 1 (=måndag) skriv ut:
        console.log("Idag är det måndag!"); //utskrift
        break;  //bryt koden
    case 2:
        console.log("Idag är det tisdag!");
        break;
    case 3:
        console.log("Idag är det onsdag!"); 
        break;
    case 4:
        console.log("Idag är det torsdag!"); 
        break;
    case 5:
        console.log("Idag är det fredag!"); 
        break;    
    case 6:
        console.log("Idag är det lördag!"); 
        break;  
    default:
        console.log("Idag är det söndag!"); //Söndagen blev default eftersom det inte kan vara ett annat svar än 0-6. annars hade den blivit case 0
}


