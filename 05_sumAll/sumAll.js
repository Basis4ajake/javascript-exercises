const sumAll = function(min, max){
    if (min < 0 || max < 0 || min !== Number || max !== Number || min % 1 !== 0 || max % 1 !== 0) {
        throw e;
    } else if (min > max) {
        return totalSum = (min + max) * (min-max+1)/2;
    } else {
        return totalSum = (min + max) * (max-min+1)/2;
    } 
}

const e = Error('ERROR');

// Do not edit below this line
module.exports = sumAll;