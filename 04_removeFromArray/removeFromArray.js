const removeFromArray = function(inputArray, arg) {
    let prunedArray = inputArray.filter(item => item !== arg);
    return(prunedArray);
};

// Do not edit below this line
module.exports = removeFromArray;
