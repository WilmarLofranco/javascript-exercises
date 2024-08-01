
const sumAll = function(a, b) {
    let min = Math.min(a, b);
    let max = Math.max(a,b);
    let sum=0;
    if (Number.isInteger(a) && Number.isInteger(b) && a > 0 && b > 0) {
    for (min; min <= max; min++) {
        sum +=  min ;
    }
    return sum;
    } else {return "ERROR"};
};


// Do not edit below this line
module.exports = sumAll;
