/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.
function vocalCheck (){
    let characterStorage = [];
    const vocali = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < word.length; i++){
        
        let charcterCounter = word[i];
        console.log(charcterCounter);

        if(charcterCounter.includes(vocali[i])) {
            characterStorage.push(charcterCounter[i])
        }
    }

    return console.log(characterStorage);
}

// Invoca la funzione qui e stampa il risultato in console
let vocalsInWord = vocalCheck();

//Risultato atteso se si passa 'javascript': 3 (a, a, i)

//  http://127.0.0.1:3000/04_conta_vocali/index.html