/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.
function countVowels(str){

    let counter = 0;
    const vowels = 'aeiou';

    for(let i = 0; i < str.length; i++){
        
        const thisChar = str[i];

        if(vowels.includes(thisChar)){
            counter++ // = counter + 1
        }
    }
    
    return counter;
}

// Invoca la funzione qui e stampa il risultato in console
const totalVowels = countVowels(word);
console.log(totalVowels)
//Risultato atteso se si passa 'javascript': 3 (a, a, i)

//  http://127.0.0.1:3000/04_conta_vocali/index.html