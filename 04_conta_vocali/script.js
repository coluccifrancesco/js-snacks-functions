/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.
function vocalCheck (){
    let characterStorage = [];
    const vocals = ["a", "e", "i", "o", "u"];

    for (let i = 0; i < word.length; i++){
        
        let charcterCounter = word[i];
        console.log(charcterCounter);

        if(word[i].includes(vocals)){
            characterStorage.push(word[i])
        }
    }

    return characterStorage
}

// Invoca la funzione qui e stampa il risultato in console
let vocalsInWord = vocalCheck();
console.log(vocalsInWord)

//Risultato atteso se si passa 'javascript': 3 (a, a, i)

//  http://127.0.0.1:3000/04_conta_vocali/index.html