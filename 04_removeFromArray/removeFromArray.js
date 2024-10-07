const removeFromArray = function (myArray, ... itemsToRemove) {
  filteredArray = myArray.filter(item => !itemsToRemove.includes(item))
  return filteredArray; 
}

myList = [1, 2, 3, 4];

removeFromArray(myList, 3)
removeFromArray(myList, 2, 3)
removeFromArray([1, 2, 2, 4], 2)
removeFromArray([1, 2, 3, 4], 7, "tacos")
removeFromArray([1, 2, 3, 4], 3, 4, 5, 6)
removeFromArray(myList, 1, 2, 3, 4)
removeFromArray(["hey", 2, 3, "ho"], "hey", 2)
removeFromArray([1, 2, 3, 4], "1", 2, 3)



// Do not edit below this line
module.exports = removeFromArray;
