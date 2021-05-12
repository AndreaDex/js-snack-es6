/* Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. */

let x =parseInt(prompt("inserisci un numero")) - 1;
console.log(x);
let y =parseInt(prompt("inserisci un altro numero maggiore del primo")) - 1;
console.log(y);
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610];

let stampa = filtraggio(fibonacci, x, y);
console.log(stampa);
const showCaseEl = document.getElementById("showcase");

showCaseEl.insertAdjacentHTML("beforeend", `
    <h2>La sequenza ha questi numeri : ${fibonacci} </h2>
    <h3>Hai selezionato : ${stampa}</h3>

`)
    
function filtraggio(array, min, max) {
    
    if(min < max){
        
        return array.filter((singolo, indice) => {
          return  indice  >= min   && indice  <= max 
        })
        
    } else if(min > max){
        
        alert("Il primo numero deve essere inferiore al secondo")
    }
}











