const repeatString = function(string, num) {
   if (num < 0) return "ERROR";
   let word = "";
      for (let i = 0; i < num; i++ ) {
         word += string;
      }
   return word;
   }



// console.log(repeatString("hey", 3))
// console.log(repeatString("hello", 10))
// console.log(repeatString('hi', 1))
// console.log(repeatString('bye', 0))
console.log(repeatString('goodbye', -1))
// console.log(repeatString('', 5))




// Do not edit below this line
module.exports = repeatString;