const findTheOldest = function(inputArray) {
    const currentYear = new Date().getFullYear();
    const oldest = inputArray.sort(function(a, b) {
        const lastGuy = a.yearOfDeath ? a.yearOfDeath - a.yearOfBirth : currentYear - a.yearOfBirth;
        const nextGuy = b.yearOfDeath ? b.yearOfDeath - b.yearOfBirth : currentYear - b.yearOfBirth;
        return lastGuy > nextGuy ? -1 : 1;
    });
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
