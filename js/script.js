// Ciclo FOR:
for (let i = 1; i <= 100; i++) {

    // Variabile CONTENT
    let content = i;

    if (i % 3 === 0 && i % 5 === 0) {
        content = 'FizzBuzz'; // Se sono multipli sia di 3 che di 5 

    } else if(i % 3 === 0) {
        content = 'Fizz'; // Se ci sono mult. di 3 stampa Fizz

    } else if (i % 5 === 0) { // Se ci sono mult. di 5 stampa Buzz
        content = 'Buzz'; 

    }

    // Stampiamo in console
    console.log(content);

}