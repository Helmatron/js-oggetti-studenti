// console.log('js-oggetti-studenti')

// << MILESTONE 1 >>

// Creare un array di oggetti di studenti.
// Ogni oggetto studente deve avere tre proprietà: nome, cognome, eta

const arrayStudenti = [
    {
    nome: 'mario',
    cognome: 'rossi',
    eta: '18'
    },
    {
        nome: 'giuseppe',
        cognome: 'faina',
        eta: '19'
    },
]
// console.log(arrayStudenti)

// Ciclare su tutti gli studenti e stampare, per ognuno di essi, nome e cognome.
// for (let i = 0; i < arrayStudenti.length; i++) {
//     const studenti = arrayStudenti[i];
//      console.log(studenti.nome, studenti.cognome)
// }


// prima ciclate con un ciclo for
// poi commentate il ciclo for e usate il forEach
arrayStudenti.forEach(studenti => console.log(studenti.nome, studenti.cognome));


// << MILESTONE 2 >> 
// (INVECE DI USARE IL PROMPT: mi volevo esercitare nel chiedere le info all'utente tramite un form e pusharle nell'array)


// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


//CHIEDO all'utente gli elementi e li prendo dal form
// RECUPERO il nome
const InputUserName = document.getElementById('name')

// RECUPERO il cognome
const InputUserSurname = document.getElementById('surname')
// RECUPERO l'età
const InputUserAge = document.getElementById('age')

// INVIO i dati
const buttonElement = document.getElementById('submit')

// EVENTO click e avvio funzione
buttonElement.addEventListener('click', getInput)

// FUNZIONE per recuperare i dati inseriti dall'utente collegata al bottone
function getInput() {
    const name = InputUserName.value;
    const surname = InputUserSurname.value;
    const age = InputUserAge.value;
    // console.log(name, surname, age)
}


// Aggiungere il nuovo studente all’array di studenti


// Ciclare su tutti gli studenti e stampare per ognuno di essi tutte le proprietà nome, cognome, eta
// prima ciclate con un ciclo for
// poi commentate il ciclo for e usate il forEach