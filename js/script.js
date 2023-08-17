// Ciclo FOR:
for (let i = 1; i <= 100; i++) {

    if(i % 3 === 0) {
        console.log('Fizz') // Se ci sono mult. di 3 stampa Fizz

    } else if (i % 5 === 0) { // Se ci sono mult. di 5 stampa Buzz
        console.log('Buzz') 
        
    } else {
        console.log(i); // Altrimenti stampa i 
    }

}