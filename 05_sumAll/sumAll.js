const sumAll = function(num1, num2) {
    let totalResult = 0;
    if (num2 < num1) {
        let i = num2;
        } else {
        i = num1;
        }; 
        while (i !== num1 || i !== num2) {
        totalResult += i;
        }
        i++;
        return totalResult += (num1 + num2);
    }

    

    sumAll(5, 10)

//Get sum of the argument numbers. Begin loop at the least of the two argument numbers
//Increment until the counter reaches the higher number
//Use addition assignment operator to add each count to the sum of the numbers as the new total result







// Do not edit below this line
module.exports = sumAll;
