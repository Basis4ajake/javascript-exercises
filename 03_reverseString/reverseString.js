
const reverseString = function(word) {
   let listOfLetters = [...word];
    word = listOfLetters.reverse();
   return word = word.join("");
};

reverseString('hello')
reverseString('hello there')
reverseString('123! abc! Hello, Odinite.')
reverseString('')

// Do not edit below this line
module.exports = reverseString;
