function sumOfMinimumNumbersFromContiguousSubArrays(list) {
    // Sort
    list.sort((a, b) => a - b);

    // Count
    var count = 0;
    for (var i = 0; i < list.length; i++) {
        var index = list.length - 1 - i;
        var number = list[index];
        var multiplier = i + 1;

        count += number * multiplier;
    }

    return count;
}

function test(answer, list) {
    if (sumOfMinimumNumbersFromContiguousSubArrays(list) === answer) {
        console.log('Passed!');
    } else {
        console.log('Failed');
        console.log('Answer: ', answer);
        console.log('List: ', list);
        throw 'Failed';
    }
}

test(3, [1, 1]);
test(4, [1, 2]);
test(10, [1, 2, 3]);
test(13, [3, 2, 1]);
