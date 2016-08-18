// Algorithm

function mergeSort(list) {
    // Base case
    if (list.length < 2) {
        return list;
    }
    
    // Indices
    var l = 0;
    var r = 0;
    var middle = Math.floor(list.length / 2);
    
    // Lists
    var left = mergeSort(list.slice(0, middle));
    var right = mergeSort(list.slice(middle));
    var combined = [];

    // Combine
    while (l < left.length && r < right.length) {
        if (left[l] < right[r]) {
            combined.push(left[l++]);
        } else {
            combined.push(right[r++]);
        }
    }

    combined = [].concat(combined, left.slice(l), right.slice(r));
    
    return combined;
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
    var ouput = module.export(input);
    console.log(`${expected} === ${ouput}`);

    // Check length
    assert(ouput.length === expected.length);

    // Check values
    for (var i = 0; i < expected.length; i++) {
        assert(expected[i] === ouput[i]);
    }
}

function assert(truthy) {
    if (truthy !== true) {
        throw 'Oh no, the assertion failed.';
    }
}
