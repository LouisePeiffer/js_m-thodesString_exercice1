//Phrase
let phrase = 'Bonjour tout le monde      '
console.log(phrase.length);
console.log(phrase.trim());
console.log(phrase.trim().length);
console.log(phrase.trim().charAt(20));
console.log(phrase.substr(7));
console.log(phrase.substr(0));
console.log(phrase.replace(" tout le monde", ""));

//Phrase 2
let phrase2 = "Ceci est une variable de type number !"
console.log(phrase2.replace("number", "string"));
//Phrase 3
let phrase3 = "Ceci est une variable de type NuMbEr ! Les numbers c'est trop bien Number numBer numbeR"
console.log(phrase3.toLocaleLowerCase("number"));