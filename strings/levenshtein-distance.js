function levenshteinDistance(
    stringA, lengthA,
    stringB, lengthB,
    cache
) {
    // Base cases
    if (lengthA === 0) {
        return lengthB;
    }

    if (lengthB === 0) {
        return lengthA;
    }

    // Checking cache
    if (!cache) {
        cache = {};
    }
    var cacheKey = lengthA + ':' + lengthB;
    var cacheValue = cache[cacheKey];
    if (cacheValue !== void 0) {
        return cacheValue;
    }

    // Core algorithm
    var cost = 0;
    if (stringA[lengthA] !== stringB[lengthB]) {
        cost = 1;
    }

    var value = Math.min(
        levenshteinDistance(stringA, lengthA - 1, stringB, lengthB, cache) + 1,
        levenshteinDistance(stringA, lengthA, stringB, lengthB - 1, cache) + 1,
        levenshteinDistance(stringA, lengthA - 1, stringB, lengthB - 1, cache) + cost
    );

    // Set cache
    cache[cacheKey] = value;

    return value;
}

// Tests
if (!module.parent) {
    function compare(stringA, stringB) {
        var response = levenshteinDistance(
            stringA, stringA.length,
            stringB, stringB.length
        );
        console.log(response);
    }

    compare(
        'Hey',
        'Hay'
    );

    compare(
        'Hello there',
        'Hallo sire'
    );

    compare(
        'Hello there, good sire, I am inquiring about your breads',
        'Hallo sire, I am inquiring about your stereo collection'
    );

    compare(
        'You know I am all about that levenshtein cache, dawg!',
        'You knew I was all about that levenshtein cache, cat.'
    );
}
