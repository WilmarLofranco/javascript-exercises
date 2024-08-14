const palindromes = function (str) {
    // declare an array with all punctuations
    const punctuations = ['.', ',', '?', '!', ':', ';'];

    // split the str
    const split = str.split('');

    // check if there is punctuations in the last char if yes splice the last char
    const lastChar = split[split.length -1];

    if (punctuations.includes(lastChar)) {
        split.splice(-1, 1);
    }

    // reverse the str given 
    
    // join it and give a "reverse" variable
    let reversed = split.reverse().join('') + (punctuations.includes(lastChar) ? lastChar : '');
    
    // make an equality test if "reverse" is same with st
    if (str === reversed) {
        return true;
    } else {
        return false;
    }
};

palindromes('Racecar!');

// Do not edit below this line
module.exports = palindromes;
