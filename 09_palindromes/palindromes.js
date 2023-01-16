const palindromes = function (inputString) {
    // Convert to array and remove punctuation
    let noPunctuationArray = [...inputString].filter(c => /[a-zA-Z0-9]/.test(c));
    // Convert all characters to lower case
    let lowercasedArray = noPunctuationArray.map(c => c.toLowerCase());
    // Remove spaces
    let nospacesArray = lowercasedArray.map(c => c.replace(" ", ""));
    // Reverse the array
    let reversedArray = nospacesArray.reverse();
    // Create a string after modifications are complete
    let reversedString = reversedArray.join('');

    // Create a string after modifications but without reversal
    let cleanedString = lowercasedArray.join('');
        
    if (cleanedString === reversedString) {
        return true;
    } else {
        return false;
    };
};

// Do not edit below this line
module.exports = palindromes;
