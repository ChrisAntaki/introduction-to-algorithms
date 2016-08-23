function swap(a, l, r) {
    var temp = a[l];
    a[l] = a[r];
    a[r] = temp;
}

function permute(a, l, r) {
    if (l === r) {
        console.log(a.join(''));
    } else {
        for (var i = l; i < r + 1; i++) {
            swap(a, l, i);
            permute(a, l + 1, r);
            swap(a, l, i); // backtrack
        }
    }
}
 
// Driver program to test the above function
var s = process.argv[2] || 'ABC';
var n = s.length;
var a = s.split('');
permute(a, 0, n - 1);
