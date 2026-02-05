console.log(`test`);

//Il software deve chiedere per 10 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.

let amount = 0;

for (let i = 0; i < 10; i++){
    const numb = parseInt(prompt(`Type any number`));
    
    amount += numb;

}

console.log(amount);

