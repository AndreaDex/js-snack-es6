/* Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà:
nome,
punti fatti,
falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

// ! Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà:
// ! Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.


/* const squadra = {
    nome : "Samb",
    chiavePunti,
    chiaveFalli,
}
console.log(squadra); */

const teams = [
    {
        nome : "Ternana",
        puntiFatti : 0,
        falliSubiti : 0,
    },
    {
        nome : "Catanzaro",
        puntiFatti : 0,
        falliSubiti : 0,
    },
    {
        nome : "Avellino",
        puntiFatti : 0,
        falliSubiti : 0,
    },
    {
        nome : "Bari",
        puntiFatti : 0,
        falliSubiti : 0,
    },
    {
        nome : "Juve Stabia",
        puntiFatti : 0,
        falliSubiti : 0,
    },
    {
        nome : "Catania",
        puntiFatti : 0,
        falliSubiti: 0,
    }
]


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let punti = getRndInteger(0, 90);
let falli = getRndInteger(0, 59);
const  puntiFatti = punti;
const  falliSubiti = falli;

console.log(teams);

const [primo] = teams;
console.log(primo);

