// Scrivi una funzione che accetti una stringa contenente un nome 

// e restituisca un saluto seguito dal nome fornito. 

// Il saluto deve essere :
// buongiorno se è mattina (fino alle 13), 

// buon pomeriggio se è pomeriggio (fino alle 17) 

// e buonasera se è sera (oltre le 17)



const firstName = 'Mario';


// Dichiara la funzione qui.
function greetings(name){

    const now = new Date()
    console.log(now);
    const hours = now.getHours;

    if(hour < 13){
        let message = 'buongiorno';
    } else if(hour >= 13 && hour < 17){
        let message = 'buon pomeriggio';
    } else {
        let message = 'buonasera';
    }

    return `${message} ${name}`

}

console.log(greetings(firstName));


// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.