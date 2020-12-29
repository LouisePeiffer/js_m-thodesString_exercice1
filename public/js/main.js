//PHRASE 1
let phrase = 'Bonjour tout le monde      '
// Afficher la longueur
console.log(phrase.length);
// Enlever des espaces
phrase = phrase.trimEnd()
// Afficher la longueur avec le trim
console.log(phrase.length)
// Afficher la dernière lettre
console.log(phrase.trim().charAt(20));
// Enlever Bonjour
phrase = phrase.substr(7);
// Remettre Bonjour
phrase = phrase.substr(0);
// Supprimer toute la phrase sauf "Bonjour"
phrase = phrase.replace(" tout le monde", "");

//Phrase 2
let phrase2 = "Ceci est une variable de type number !"
phrase2 = phrase2.replace("number", "string");
//Phrase 3
let phrase3 = "Ceci est une variable de type NuMbEr ! Les numbers c'est trop bien Number numBer numbeR"
//phrase3 = phrase3.toLocaleLowerCase("number");
phrase3 =  phrase3.replace(/number/ig, "number");