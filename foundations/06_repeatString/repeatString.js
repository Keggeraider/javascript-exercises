const repeatString = function(str, num) {
    let newStr = str;
    if (num > 1) {
        for (let i = 1; i < num; i++) {
            newStr += str;
        }
    } else if (num < 0) { 
        return "ERROR"; 
    } else if (num === 0) {
        return ""
    }

    return newStr;
};

// Do not edit below this line
module.exports = repeatString;
