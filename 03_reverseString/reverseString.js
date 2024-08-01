const reverseString = function(string) {
    let result = "";
    for (let i = 0; i < string.length; i++) {
        result = string.slice(i,i+1)+result;
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;


