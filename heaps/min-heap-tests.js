const MinHeap = require('./min-heap');

const heap = new MinHeap();

heap.add({key: 1, value: 'Hay'});
heap.add({key: 7, value: 'Hay'});
heap.add({key: 2, value: 'Hay'});
heap.add({key: 4, value: 'Hay'});
heap.add({key: 3, value: 'Hay'});
heap.add({key: 9, value: 'Hay'});
heap.add({key: 23, value: 'Hay'});
heap.add({key: 18, value: 'Hay'});
heap.add({key: 11, value: 'Hay'});
heap.add({key: 90, value: 'Hay'});
console.log(heap);

heap.pop();
console.log(heap);
heap.pop();
console.log(heap);
heap.pop();
console.log(heap);
heap.pop();
console.log(heap);
