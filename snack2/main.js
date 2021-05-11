/* Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà:
nome,
punti fatti,
falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

// ! Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà:



/* let punti = getRndInteger(0, 90);
let falli = getRndInteger(0, 59);
const  puntiFatti = punti;
const  falliSubiti = falli;
 */

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

// ! Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

for (let index = 0; index < teams.length; index++) {
    const element = teams[index];
    element.puntiFatti = getRndInteger(0, 90);
    element.falliSubiti = getRndInteger(0, 59)
    
}
//console.log(teams);

// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
//let nomiEfalli ;
var nomiEpunti = []
for (let index = 0; index < teams.length; index++) {
    const element = teams[index];
    var {nome, falliSubiti} = element ;
    nomiEpunti.push(nome, falliSubiti)
    
}
console.log(nomiEpunti);


