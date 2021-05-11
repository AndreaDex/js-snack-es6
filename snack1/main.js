
/* 
 *Creare un array di oggetti, ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
    nome e
    peso.
 todo Stampare a schermo la bici con peso minore utilizzando destructuring e template literal 
*/

var bicycles = [
    { 
       nome : "Atala",
       peso : 15,
    },
    { 
        nome : "Santa Cruz",
        peso : 12,
    },
    { 
        nome : "Trek",
        peso : 16,
    },
    { 
        nome : "Kona",
        peso : 11,
    },
    { 
        nome : "Giant",
        peso : 20,
    },
]
var listaPesi = [];
for (let index = 0; index < bicycles.length; index++) {
    const object = bicycles[index];
    listaPesi.push(object.peso);
}

listaPesi.sort(function(a,b){
    return a - b;
  })

console.log(listaPesi);

/* numbers.sort(function(a, b) {
    return a - b;
  }); */
/*  const [,,,lightweight] = bicycles;
 console.log(lightweight);

 var divEl = document.getElementById("stampa");
 divEl.innerHTML = 
 `<h2>La bici più leggera è :</h2>
 <h3>${lightweight.nome}</h3>
 ` */

 /* function getMinPeso() {
    return bicycles.reduce((min, p) => p.peso < min ? p.peso : min, bicycles[0].y);
  }
  console.log(getMinPeso()); */