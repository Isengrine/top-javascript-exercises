function removeFromArray(array, ...items) {
    for (let item of items) {
        if (array.includes(item)) {
            let index = array.indexOf(item);
            const splitArray = array.splice(index, 1);
        }

        else {
            continue
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
