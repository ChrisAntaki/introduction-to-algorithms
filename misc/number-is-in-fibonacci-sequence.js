var fibonacciNumbers = [1, 1];

function calculateFibonacci(n) {
    if (n in fibonacciNumbers) {
        return fibonacciNumbers[n];
    }

    var number = (
        calculateFibonacci(n - 1)
        +
        calculateFibonacci(n - 2)
    );

    fibonacciNumbers[n] = number;

    return number;
}

function numberIsInFibonacciSequence(n) {
    for (var i = n;; i++) {
        var number = calculateFibonacci(i);
        if (number === n) {
            return true;
        }
        if (number > n) {
            return false;
        }
    }
}

// Potential areas of improvement:
// - Error checking
// - Caching
