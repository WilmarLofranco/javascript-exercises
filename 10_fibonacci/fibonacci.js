const fibonacci = function(length) {
    parseInt(length);
    if (length === 0 || length === '0') return 0;
    if (length < 0) return "OOPS";
    let array = [1, 1];
    for (let i = 2; i < length; i++) {
    let sum = array[array.length -1]+ array[array.length -2];
    array.push(sum);
    }
    return array[array.length -1];
};

fibonacci(4);

// Do not edit below this line
module.exports = fibonacci;
