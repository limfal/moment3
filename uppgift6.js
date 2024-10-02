/* Lösning till Uppgift 6 - åldersräknare. Av Linn Fällman, 2024 */

"use strict";


let birthDate = new Date("1976-10-14"); //Date-objekt för födelseåret (en definierad punkt som textsträng)
let thisDate = new Date(); //Ospecificerat date-objekt för att få dagens datum

let birthYear = birthDate.getFullYear(); //Hämtar år från födelsedatum-objektet
let thisYear = thisDate.getFullYear(); //Hämtar år från detta datum-objektet

let age = thisYear - birthYear; //Åldern är nuvarande år minus födelseår (fast egentligen gäller det bara på nyårsafton)

//Här skrivs åldern ut
console.log("Grattis! Du är nu " + age + " år gammal.");
