const removeFromArray = function() {
    let prunedArray = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        prunedArray = prunedArray.filter(word => word !== arguments[i]);
    }
    return(prunedArray);
};

// Do not edit below this line
module.exports = removeFromArray;
