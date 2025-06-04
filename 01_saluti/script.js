// http://127.0.0.1:3000/01_saluti/index.html

// Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]")

const userName = prompt('Inserisci il tuo nome');

// Dichiara la funzione qui.
function sayHi (){
    console.log('Ciao ' + userName + '!');
    return
}


// Invoca la funzione qui e stampa il risultato in console
sayHi()


//Risultato atteso se si passa 'Mario': // ciao Mario
