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
const operate = {
    '+': function(num1, num2) {return Math.round((num1 + num2) * 1000) / 1000},
    '-': function(num1, num2) {return Math.round((num1 - num2) * 1000) / 1000},
    '×': function(num1, num2) {return Math.round((num1 * num2) * 1000) / 1000},
    '÷': function(num1, num2) {
            if (num2 == 0) {
                return "Cannot divide by 0"
            } else {
                return Math.round((num1 / num2) * 1000) / 1000;
            }
        }
};

// display function
const display = function(value, state) {
    if (state == "add") {
        document.getElementById('display').innerHTML += value;
    } else {
        document.getElementById('display').innerHTML = value;
    }

}


// Operation function
const click = function() {
    let state;
    let num1 = "none", num2 = "none", operator = "none";
    document.querySelectorAll(".clicks").forEach(button => {
        button.onclick = function() {

            // Keep displaying when only numbers are clicked
            if (button.className.indexOf("number") != -1) {
                display(button.value, state);
                state = "add";
            }
            // Store numbers and operate when an operator is clicked
            else if (button.className.indexOf("operator") != -1)
            {
                if (operator == "none" || operator =="=")
                {
                    operator = button.value;
                    num1 = Number(document.getElementById('display').innerHTML);
                    state = "new";
                } else if (operator != "=") {
                    num2 = Number(document.getElementById('display').innerHTML);
                    document.getElementById('display').innerHTML = ``;
                    display(operate[operator](num1, num2));
                    num1 = operate[operator](num1, num2);
                    state = "new";
                    operator = button.value;
                }
            }
            // Clear when clear button is clicked
            else if (button.className.indexOf("clear") != -1) {
                document.getElementById('display').innerHTML = ``;
                state = "new";
                num1, num2, operator = "none";
            }

            // Decimal button
            let decimal = document.getElementById(".");
            if (document.getElementById('display').innerHTML.indexOf(".") != -1 )
            {
                decimal.disabled = true;
            } else {
                decimal.disabled = false;
            }
        }
    })
}

// Calculator
addEventListener('DOMContentLoaded', (event) => {
    click();
});
