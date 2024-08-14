const findTheOldest = function(array) {
    return array.reduce((oldest, current) => {
        let currentAge = (current.yearOfDeath || new Date().getFullYear()) - current.yearOfBirth;
        let oldestAge = (oldest.yearOfDeath || new Date().getFullYear()) - oldest.yearOfBirth;
        if (currentAge > oldestAge) {
            return current; 
        } else {
            return oldest;
        }
    })
}

// Do not edit below this line
module.exports = findTheOldest;
