console.log(`test`);

// snack 1
// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

const numbOne = parseInt(prompt(`Type any number`))
const numbTwo = parseInt(prompt(`Type onother number`))

if (numbOne > numbTwo) {
    console.log(numbOne);
    
}

else if (numbOne < numbTwo) {
    console.log(numbTwo);
    
}
