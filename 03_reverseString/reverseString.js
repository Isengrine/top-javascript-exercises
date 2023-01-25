function reverseString(str) {

    let chars = str.split("");
    let revStr = "";
    
    for (let i = 0; i < str.length; i++) {
        revStr += chars.pop()
    }

    return revStr;
    
};

// Do not edit below this line
module.exports = reverseString;
