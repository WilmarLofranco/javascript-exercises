
function repeatString (string, num) {
    if (num >= 0) {
    let result = "";
    for ( i = 0; i < num; i++) {
    result += string;
    }
    return result;
    } else {return "ERROR"}
};

repeatString

// Do not edit below this line
module.exports = repeatString;
