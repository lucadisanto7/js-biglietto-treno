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
if (sconto != 0){
    prezzo_scontato = prezzo_biglietto * sconto / 100;
    prezzo_finale = prezzo_biglietto - prezzo_scontato
}
else{
    prezzo_finale = prezzo_biglietto
}
document.getElementById('prezzo_finale').innerHTML = prezzo_finale