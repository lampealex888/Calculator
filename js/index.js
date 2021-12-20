let displayValue = "";
let operand1 = 0;
let operand2 = 0;
let operator = "";


const display = document.getElementById("display-input");


function updateDisplay(symbol) {
    if (Number.isInteger(parseInt(symbol)) == true) {
        operand1 = parseInt(symbol);
    } else {
        console.log("finish this tomorrow");
    }
    displayValue = displayValue + " " + symbol;
    display.textContent = displayValue;
}

function add(param1, param2) {
    return param1 + param2;
}

function subtract(param1, param2) {
    return param1 - param2;
}

function multiply(param1, param2) {
    return param1 * param2;
}

function divide(param1, param2) {
    return param1 / parseFloat(param2);
}

function operate(operatorParam, param1, param2) {
    if (operatorParam == "+") {
        return add(param1, param2);
    } else if (operatorParam == "-") {
        return subtract(param1, param2);
    } else if (operatorParam == "*") {
        return multiply(param1, param2);
    } else if (operatorParam == "/") {
        return divide(param1, param2);
    } else {
        return null;
    }
}