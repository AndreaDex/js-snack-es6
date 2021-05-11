
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
/* 
function getMinPeso() {
    return bicycles.reduce((min, p) => p.peso < min ? p.peso : min, bicycles[0].peso);
  }
  console.log(getMinPeso()); */

  // todo Verificare il peso minore tra le bici con ciclo 
/*  var biciLeggera = bicycles[0];

for (let index = 0; index < bicycles.length; index++) {
    const object = bicycles[index];
    
    if(object.peso < biciLeggera.peso){
        biciLeggera = object[index]
    }
    
} */


 const [,,,lightweight] = bicycles;
 console.log(lightweight);

 var divEl = document.getElementById("stampa");
 divEl.innerHTML = 
 `<h2>La bici più leggera è :</h2>
 <h3>${lightweight.nome}</h3>
 ` 
