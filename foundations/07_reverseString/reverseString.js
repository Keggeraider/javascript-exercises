const reverseString = function(str) {
    let newStr = "";
    for (let i = 1; i <= str.length; i++) {
        newStr += str.at(-1 * i);
    }
    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
