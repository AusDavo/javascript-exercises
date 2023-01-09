const leapYears = function(yearInput) {
    let leapOrNot = false;
    if (yearInput % 4 == 0) {
        leapOrNot = true;
    } if (yearInput % 100 == 0) {
        leapOrNot = false;
    } if (yearInput % 400 == 0) {
        leapOrNot = true;
    }
    return(leapOrNot);
};

// Do not edit below this line
module.exports = leapYears;
