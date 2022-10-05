// Operators
// Add
const add = function(a,b) {
    return a + b;
}

// Subtract
const subtract = function(a,b) {
    return a - b;
}

// Multiply
const multiply = function(a,b) {
    return a * b;
}

// Divide
const divide = function(a,b) {
    if (b == 0) {
        return "Cannot divide by 0"
    } else {
        return a / b;
    }
}

// Operate Function
const operate = function(x, y, operator) {
    return operator(x,y);
}
