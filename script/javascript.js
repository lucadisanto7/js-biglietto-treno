let age = prompt('inserisci la tua eta');
let chilometri = prompt('inserisci i chilometri da percorrere');

let prezzo_biglietto = 0.21 * chilometri;
let sconto = 0
let prezzo_scontato = 0
let prezzo_finale = 0

if (age < 18){
    sconto = 20;
}
else if (age > 65){
    sconto = 40;
}