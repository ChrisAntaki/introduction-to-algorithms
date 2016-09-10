var binarySearch = require('./binary-search');

console.log(binarySearch([1,2,3,4,5,6], 9));
console.log(binarySearch([1,2,3,4,5,6], 4));
console.log(binarySearch([1,2,3,4,5,6], 7));
console.log(binarySearch([1,2,3,4,5,6], 2));
console.log(binarySearch([1,2,3,4,5,6], 0));
console.log(binarySearch([1,2,3,4,5,6], 4));
console.log(binarySearch([1,2,3,4,5,6], 'a'));
console.log(binarySearch([1,2,3,4,5,6], 6));
console.log(binarySearch([1,2,3,4,5,6]));
console.log(binarySearch([1,2,3,4,5,6], 1));
console.log(binarySearch());
