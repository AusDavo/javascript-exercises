const repeatString = function(string, num) {
    
    let returnedString = "";
    
    if (num < 0) {
        returnedString = "ERROR";
    } else {
        for (let i = 0; i < num; i++) {
            returnedString += string;
            }
        }
    return(returnedString);
};

// Do not edit below this line
module.exports = repeatString;
