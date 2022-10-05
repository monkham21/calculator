// Operators
const add = function(num1, num2) {
    return num1 + num2;
}

const subtract = function(num1, num2) {
    return num1 - num2;
}

const multiply = function(num1, num2) {
    return num1 * num2;
}

const divide = function(num1, num2) {
    if (num2 == 0) {
        return "Cannot divide by 0"
    } else {
        return num1 / num2;
    }
}

// operate function
const operate = function (num1, num2, operator) {
    return operator(num1, num2);
}
