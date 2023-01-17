const getTheTitles = function(inputArray) {
let key = "title";
let extractedTitles = inputArray.map(obj => obj[key]);
return(extractedTitles);
}

// Do not edit below this line
module.exports = getTheTitles;
