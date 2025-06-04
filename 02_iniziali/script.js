/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function showInit (){
    let initLocator = []

    for (let i = 0; i < names.length; i++){
        let namesDisplay = names[i];

        initLocator.push(namesDisplay.slice(0, 1));
    }

    return console.log(initLocator)
}

// Invoca la funzione qui e stampa il risultato in console
showInit()


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]



//  http://127.0.0.1:3000/02_iniziali/index.html