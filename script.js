const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');

let firstNumber = '';
let operator = '';
let secondNumber = '';
let result = '';

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    if (num2 === 0) {
        return "Cannot divide by zero!";
    } else {
    return num1 / num2;
    }
}

function operate(operator, num1, num2){
    switch(operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return 'Error: Invalid operator!'
    }
}

function populateDisplay(buttonValue) {
    if (firstNumber === '' && operator === '') {
        firstNumber = buttonValue;
        display.textContent = firstNumber;
    } else if (firstNumber !== '' && operator === '') {
        firstNumber += buttonValue;
        display.textContent = firstNumber;
    } else if (firstNumber !== '' && operator !== '' && secondNumber === '') {
        secondNumber = buttonValue;
        display.textContent = secondNumber;
    } else if (firstNumber !== '' && operator !== '' && secondNumber !== '') {
        secondNumber += buttonValue;
        display.textContent = secondNumber;
    }
}

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        populateDisplay(button.textContent);
    })
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        operator = button.textContent;
    })
})

equalsButton.addEventListener('click', () => {
    result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
    display.textContent = result;
    firstNumber = result.toString();
    operator = '';
    secondNumber = '';
})

clearButton.addEventListener('click', () => {
    firstNumber = '';
    operator = '';
    secondNumber = '';
    result = '';
    display.textContent = '0';
})