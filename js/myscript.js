// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// Il prezzo del biglietto è definito in base ai km (0.21 € al km).
// Va applicato uno sconto del 20% per i minorenni.
// Va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// Chiedo all'utente quanti chilometri deve percorrere.
let distanza = parseInt(prompt("Quanti chilometri devi percorrere?"));

// Chiedo l'età dell'utente.
let userAge = parseInt(prompt("Quanti anni hai?"));

// Calcolo il prezzo del biglietto.
let ticketPrice = distanza * 0.21;

// Calcolo lo sconto.

if (userAge < 18) {
    let discount = ((ticketPrice / 100) * 20);
    ticketPrice = ticketPrice - discount;
}
else if (userAge >= 65) {
    let discount = ((ticketPrice / 100) * 40);
    ticketPrice = ticketPrice - discount;
}


console.log(distanza, userAge, ticketPrice);