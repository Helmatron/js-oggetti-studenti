// console.log('js-oggetti-studenti')

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