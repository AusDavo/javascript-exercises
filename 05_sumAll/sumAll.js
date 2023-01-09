const sumAll = function(userInputA, userInputB) {
    
    let finalSum = 0;

    if (userInputA < 0 || userInputB < 0) {
        finalSum = "ERROR";
    } else if (typeof userInputA !== "number" || typeof userInputB !== "number") {
        finalSum = "ERROR";
    } else {
        let userInputs = [userInputA, userInputB].sort();
        for (i = userInputs[0]; i <= userInputs[1]; i++) {
            finalSum += i;
        }
    }

    return(finalSum);
};

// Do not edit below this line
module.exports = sumAll;
