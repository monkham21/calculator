// Operators
const add = function(x, y) {
    return x + y;
}

const subtract = function(x, y) {
    return x - y;
}

const multiply = function(x, y) {
    return x * y;
}

const divide = function(x, y) {
    if (y == 0) {
        return "Cannot divide by 0"
    } else {
        return x / y;
    }
}

// operate function
const operate = function (a, b, operator) {
    return operator(a, b);
}
