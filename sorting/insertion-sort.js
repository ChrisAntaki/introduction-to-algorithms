// Algorithm

// Loop invariant:
// The sub-array a[0 .. i - 1] is sorted

function insertionSort(list) {
    for (var i = 1; i < list.length; i++) {
        var value = list[i];
        
        for (var j = i - 1; j >= 0 && value < list[j]; j--) {
            list[j + 1] = list[j];
        }
        
        list[j + 1] = value;
    }
    
    return list;
}

module.export = insertionSort;

// Tests
if (!module.parent) {
    test([1,2,3], [1,2,3]);
    test([3,2,1], [1,2,3]);
    test([5,1,3], [1,3,5]);
    test([5,9,1], [1,5,9]);
    test([3,2,1,4,5,6,9,8,7], [1,2,3,4,5,6,7,8,9]);
    test([1,2,3,1,2,3,1,2,3], [1,1,1,2,2,2,3,3,3]);

    console.log('\nAll tests passed!');
}

function test(input, expected) {
    var output = module.export(input);
    console.log(`${expected} === ${output}`);

    // Check length
    assert(input.length === expected.length);

    // Check values
    for (var i = 0; i < expected.length; i++) {
        assert(expected[i] === output[i]);
    }
}

function assert(truthy) {
    if (truthy !== true) {
        throw 'Oh no, the assertion failed.';
    }
}
