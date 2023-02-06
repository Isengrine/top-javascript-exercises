const palindromes = function (input) {
    input = input.toLowerCase();
    input = input.replace(/!|,|\.|\s/g, "");
    console.log(input);
    let array = Array.from(input);
    reversedArray = array.reverse();
    reversedStr = reversedArray.join("");
    if (reversedStr == input) {
        return true;
    }

    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
