const fibonacci = function(num) {
    let array = [1, 1];
    num = parseInt(num);

    if (num < 0 ) {
        return "OOPS";
    }

    else if (num <= 2) {
        return 1;
    }

    else if (num > 2) {
        for (let i = 2; i < num; i++) {
            value = array[(i - 2)] + array[(i - 1)];
            array.push(value);
        }

        return value;
    }
};

// Do not edit below this line
module.exports = fibonacci;
