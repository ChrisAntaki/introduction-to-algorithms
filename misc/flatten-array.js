function flattenArray(list) {
    var flatList = [];
    
    for (var i = 0; i < list.length; i++) {
        if (Array.isArray(list[i])) {
            var subList = flattenArray(list[i]);
            for (var j = 0; j < subList.length; j++) {
                flatList.push(subList[j]);
            }
        } else {
            flatList.push(list[i]);
        }
    }
    
    return flatList;
}

console.log(flattenArray([1,2,[3,4,5],6,[[[[[[[[7], 8], 9]]]]]]]));