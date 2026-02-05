console.log(`test`);

//Crea un array vuoto.

const empty_ar = []

//Chiedi per 6 volte all’utente di inserire un numero,

for (let i = 0; i < 6; i++){
    const numb = parseInt(prompt(`Type any number`));

    if (numb % 2 !==0 ){
        empty_ar.push(numb)
    }
    
}

console.log(empty_ar);

    
//se è dispari inseriscilo nell’array.



