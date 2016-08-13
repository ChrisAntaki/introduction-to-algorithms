function findElementByID(id, el) {
    el = el || document.body;
    
    if (el.nodeType !== 1) {
        return false;
    }

    var classes = el.id.split(' ');
    if (classes.indexOf(id) !== -1) {
        return el;
    }

    for (var i = 0; i < el.childNodes.length; i++) {
        var child = el.childNodes[i];
        var result = findElementByID(id, child);
        if (result) {
            return result;
        }
    }

    return false;
}

module.exports = findElementByID;
