function printAllPermutations(s, h) {
    h = h || ''; // Head

    if (s.length === 0) {
        console.log(h);
        return;
    }

    for (var i = 0; i < s.length; i++) {
        var c = s[i];
        var remainder = s.slice(0, i) + s.slice(i + 1);
        printAllPermutations(remainder, h + c);
    }
}

// Driver
var s = process.argv[2] || 'ABC';
printAllPermutations(s);
