const leapYears = function(year) {
    if (year % 4 != 0) {   //Check that year is not a leap year
        let isLeapYear = false;
        return isLeapYear;
    } else if ((year % 4 === 0) && (year % 100 === 0) && (year % 400 !== 0)) {  //Here we check again if the year is not a leap year
        let isLeapYear = false;
        return isLeapYear;
    } else {                              //Then it must be a leap year
        let isLeapYear = true;
        return isLeapYear;
    }
}



// Do not edit below this line
module.exports = leapYears;
