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
//const operate = function (num1, num2, operator) {
//    return operator(num1, num2);
//}

// operate function
const operate = {
    '+': function(num1, num2) {return num1 + num2},
    '-': function(num1, num2) {return num1 - num2},
    '×': function(num1, num2) {return num1 * num2},
    '÷': function(num1, num2) {
            if (num2 == 0) {
                return "Cannot divide by 0"
            } else {
                return num1 / num2;
            }}
};

// display function
const display = function(value, state) {
    if (state == "add") {
        document.getElementById('display').innerHTML += value;
    } else {
        document.getElementById('display').innerHTML = value;
    }

}

const click = function() {
    var expression, state;
    var num1 = "none", num2 = "none", operator = "none";
    document.querySelectorAll(".clicks").forEach(button => {
        button.onclick = function() {
            expression = document.getElementById('display').innerHTML; // storing display value


            if (button.className.indexOf("number") != -1) {
                display(button.value, state);
                state = "add";
            } else if (button.className.indexOf("operator") != -1) {
                if (operator == "none")
                {
                    operator = button.value;
                    num1 = Number(document.getElementById('display').innerHTML);
                    console.log(num1);
                    state = "new";
                } else
//                if (num1 != "none" && num2 == "none")
                {
                    num2 = Number(document.getElementById('display').innerHTML);
                    console.log(operate[operator](num1, num2));
                    document.getElementById('display').innerHTML = ``;
                    display(operate[operator](num1, num2));
                    state = "new";
                    operator = "none";
                }
//                else {
//                    num1, num2 = "none";
//                    state = "new";
//                }
            }
        }
    })
    return expression;
}

addEventListener('DOMContentLoaded', (event) => {
    click();
});