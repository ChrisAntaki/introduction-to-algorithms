function binarySearch(list, target) {
    if (!list) {
        return -1;
    }

    var left = 0;
    var right = list.length - 1;

    while (left <= right) {
        var middle = Math.floor((left + right) / 2);

        if (list[middle] === target) {
            return middle;
        }

        if (list[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return -1;
}

module.exports = binarySearch;
