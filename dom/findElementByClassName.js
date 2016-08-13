function findElementByClassName(className, el) {
    el = el || document.body;
    
    if (el.nodeType !== 1) {
        return false;
    }

    var classes = el.className.split(' ');
    if (classes.indexOf(className) !== -1) {
        return el;
    }

    for (var i = 0; i < el.childNodes.length; i++) {
        var child = el.childNodes[i];
        var result = findElementByClassName(className, child);
        if (result) {
            return result;
        }
    }

    return false;
}

module.exports = findElementByClassName;
