// - Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// - Crea un ciclo for che stampi i numeri da 1 a 100
for (i = 1; i <= 100; i++) {    
// - Se i diviso 3 === 0 && i 5 === 0 stampa FizzBuzz 
    if (i % 3 === 0 && i % 5 === 0){
    console.log('FizzBuzz')

// Altrimenti se i diviso 3 === 0 stampa Fizz
    } else if (i % 3 === 0) {        
        console.log('Fizz') 

// Altrimenti se i diviso 5 === 0 stampa Buzz
    }   else if (i % 5 === 0){
        console.log('Buzz')

// Altrimenti stampa il numero
    } else {
        console.log(i)
    }      

}



