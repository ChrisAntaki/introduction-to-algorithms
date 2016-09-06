function quickSort(list) {
    return quickSortRec(list, 0, list.length - 1);
}

function quickSortRec(list, start, end) {
    // Base case
    if (end - start < 1) {
        return;
    }

    var index = start;
    var pivot = list[end];
    for (var i = start; i < end; i++) {
        if (list[i] <= pivot) {
            swap(list, i, index++);
        }
    }
    swap(list, index, end);
    quickSortRec(list, start, index - 1);
    quickSortRec(list, index + 1, end);
    return list;
}

function swap(list, a, b) {
    var value = list[a];
    list[a] = list[b];
    list[b] = value;
}

console.log(quickSort([1,3,4321,1,2,342,3,24,2,4,452]));
