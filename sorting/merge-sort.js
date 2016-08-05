// Algorithm

function mergeSort(a, start, end) {
    if (start === undefined) {
        start = 0;
    }

    if (end === undefined) {
        end = a.length - 1;
    }

    if (start >= end) {
        return;
    }

    const middle = Math.floor((end - start) / 2) + start;
    mergeSort(a, start, middle);
    mergeSort(a, middle + 1, end);
    merge(a, start, middle, end);
}

function merge(a, start, middle, end) {
    var left = [];
    for (let i = start; i <= middle; i++) {
        left.push(a[i]);
    }
    left.push(Infinity);

    var right = [];
    for (let i = middle + 1; i <= end; i++) {
        right.push(a[i]);
    }
    right.push(Infinity);

    for (let i = start; i <= end; i++) {
        if (left[0] < right[0]) {
            a[i] = left.shift();
        } else {
            a[i] = right.shift();
        }
    }
}

module.export = mergeSort;

// Tests
if (!module.parent) {
    test([1,2,3], [1,2,3]);
    test([3,2,1], [1,2,3]);
    test([3,2,1,0], [0,1,2,3]);
    test([5,1,3], [1,3,5]);
    test([5,9,1], [1,5,9]);
    test([3,2,1,4,5,6,9,8,7], [1,2,3,4,5,6,7,8,9]);
    test([1,2,3,1,2,3,1,2,3], [1,1,1,2,2,2,3,3,3]);

    console.log('\nAll tests passed!');
}

function test(input, expected) {
    module.export(input);
    console.log(`${expected} === ${input}`);

    // Check length
    assert(input.length === expected.length);

    // Check values
    for (var i = 0; i < expected.length; i++) {
        assert(expected[i] === input[i]);
    }
}

function assert(truthy) {
    if (truthy !== true) {
        throw 'Oh no, the assertion failed.';
    }
}
