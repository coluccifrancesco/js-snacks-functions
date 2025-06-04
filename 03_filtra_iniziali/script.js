/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

let letterChoice = "A";


// Dichiara la funzione qui.
function initialLocator (){
    let singleNames = [];
    
    for (let i = 0; i < names.length; i++){
        
        if(names[i].includes(letterChoice)){
            singleNames.push(names[i]);
        }
    }
    
    return singleNames
}

// Invoca la funzione qui e stampa il risultato in console
let namesWithA = initialLocator();
console.log(namesWithA);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

//  http://127.0.0.1:3000/03_filtra_iniziali/index.html