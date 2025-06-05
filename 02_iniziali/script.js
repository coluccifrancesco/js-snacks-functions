/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function showInit (){
    let initLocator = []

    for (let i = 0; i < names.length; i++){
        let namesDisplay = names[i] // .charAt(0);
       
        // initLocator.push(namesDisplay.slice(0, 1));
 
        initLocator.push(namesDisplay[0]);

        // 3 modi per ottenere il risultato
    }

    return initLocator
}

// Invoca la funzione qui e stampa il risultato in console
console.log(showInit())


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]