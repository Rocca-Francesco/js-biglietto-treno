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

console.log(ticketPrice);
// Scrivo il prezzo finale, in euro.
ticketPrice = (Math.round((ticketPrice * 100))) / 100;

document.getElementById("final_price").innerHTML = "Il prezzo del tuo bigliettto è €" + ticketPrice + "."

console.log(distanza, userAge, ticketPrice);