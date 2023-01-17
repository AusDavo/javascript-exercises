const fibonacci = function(inputSequenceLength) {
    const sequenceLength = Number(inputSequenceLength);
    let fibonacciSequence = [];
        if(isNaN(sequenceLength) || sequenceLength <= 0) {
            return ("OOPS");
        } else {
            if(sequenceLength > 0) {
                fibonacciSequence[0] = 1;
            }
            if(sequenceLength > 1) {
                fibonacciSequence[1] = 1;
            }
            if(sequenceLength > 2) {
                for (i = 2; i < sequenceLength; i++) {
                    fibonacciSequence[i] = fibonacciSequence[i-1] + fibonacciSequence[i-2];
                }
            }
            return (fibonacciSequence[sequenceLength - 1]);
        }
};

// Do not edit below this line
module.exports = fibonacci;
