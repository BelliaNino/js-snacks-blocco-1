console.log(`test`);

//L’utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.

const word_one = (prompt(`Type any word`))
const word_two = (prompt(`Type onother word`))

if (word_one.length < word_two.length){
    console.log(word_one, word_two);
    
    
}

else if (word_one.length > word_two.length){
    console.log(word_two, word_one);
    
}

else {
    message = `try again, words have the same lenght`
    console.log(message);
    
}