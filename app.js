// - Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
// Recupero l'elemento di classe grid dal DOM
const gridDOMElement = document.querySelector('.grid')
console.log(gridDOMElement)

// - Crea un ciclo for che stampi i numeri da 1 a 100
for (i = 1; i <= 100; i++) {    
// - Se i diviso 3 === 0 && i 5 === 0 stampa FizzBuzz 
    if (i % 3 === 0 && i % 5 === 0){
    console.log('FizzBuzz')
    const fizzBuzz = i % 3 === 0 && i % 5 === 0
    const boxDOMElement = document.createElement('div')
    console.dir(boxDOMElement)
    boxDOMElement.classList.add('box')
    boxDOMElement.innerHTML = 'fizzBuzz'
    gridDOMElement.append(boxDOMElement)   
// Altrimenti se i diviso 3 === 0 stampa Fizz
    } else if (i % 3 === 0) {        
        console.log('Fizz')
        const fizz = i % 3 === 0
        const boxDOMElement = document.createElement('div')
        console.dir(boxDOMElement)
        boxDOMElement.classList.add('box')
        boxDOMElement.innerHTML = 'fizz'
        gridDOMElement.append(boxDOMElement) 

// Altrimenti se i diviso 5 === 0 stampa Buzz
    }   else if (i % 5 === 0){
        console.log('Buzz')
        const buzz = i % 5 === 0
        const boxDOMElement = document.createElement('div')
        console.dir(boxDOMElement)
        boxDOMElement.classList.add('box')
        boxDOMElement.innerHTML = 'buzz'
        gridDOMElement.append(boxDOMElement)

// Altrimenti stampa il numero
    } else {
        console.log(i)
        const num = i 
        const boxDOMElement = document.createElement('div')
        console.dir(boxDOMElement)
        boxDOMElement.classList.add('box')
        boxDOMElement.innerHTML = i
        gridDOMElement.append(boxDOMElement)
    }      

}

// Creo una tabella dove racchiudere i valori ottenuti

// Recupero l'elemento di classe grid dal DOM
// const gridDOMElement = document.querySelector('.grid')
// console.log(gridDOMElement)

// // Crea un div con classe box nel DOM 
// const boxDOMElement = document.createElement('div')
// boxDOMElement.classList.add('box')
// gridDOMElement.innerHTML += fizzBuzz


