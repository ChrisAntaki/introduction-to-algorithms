const MinHeap = require('./min-heap');

const heap = new MinHeap();

heap.add({key: 1, value: 'Hay'});
heap.add({key: 7, value: 'Hay'});
heap.add({key: 2, value: 'Hay'});
heap.add({key: 4, value: 'Hay'});
heap.add({key: 3, value: 'Hay'});
heap.add({key: 9, value: 'Hay'});

console.log(heap);
console.log(heap.min());
