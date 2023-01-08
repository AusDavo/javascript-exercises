const repeatString = function(string, num) {
    let returnedString = "";
    for (let i = 0; i < num; i++) {
        returnedString += string;
    }
    return(returnedString);
};

// Do not edit below this line
module.exports = repeatString;
