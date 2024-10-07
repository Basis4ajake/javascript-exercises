const leapYears = function(year) {
    if (year % 4 != 0) {
        let isLeapYear = false;
        return isLeapYear;
    } else if ((year % 4 === 0) && (year % 100 === 0) && (year % 400 !== 0)) {
        let isLeapYear = false;
        return isLeapYear;
    } else {
        let isLeapYear = true;
        return isLeapYear;
    }
    
    (year % 4 === 0) && (year % 400 === 0) && (year % 100 != 0) {
        return console.log(true);
    }
};

// Do not edit below this line
module.exports = leapYears;
