let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let shouldResetScreen = false;

const calculatorDisplay = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');
const pointButton = document.querySelector('.decimal');

numberButtons.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.textContent))
);

operatorButtons.forEach((button) =>
  button.addEventListener('click', () => setOperation(button.textContent))
);

equalsButton.addEventListener('click', evaluate);

clearButton.addEventListener('click', clear);

pointButton.addEventListener('click', appendDecimal);

function appendNumber(number) {
  if (calculatorDisplay.textContent === '0' || shouldResetScreen) {
    calculatorDisplay.textContent = number;
    shouldResetScreen = false;
  } else {
    calculatorDisplay.textContent += number;
  }
}

function appendDecimal() {
  if (shouldResetScreen) resetScreen();
  if (!calculatorDisplay.textContent.includes('.')) {
    calculatorDisplay.textContent += '.';
  }
}

function resetScreen() {
  calculatorDisplay.textContent = '';
  shouldResetScreen = false;
}

function clear() {
  calculatorDisplay.textContent = '0';
  firstOperand = '';
  secondOperand = '';
  currentOperation = null;
}

function setOperation(operator) {
  if (currentOperation !== null) evaluate();
  firstOperand = calculatorDisplay.textContent;
  currentOperation = operator;
  shouldResetScreen = true;
}

function evaluate() {
  if (currentOperation === null) return;
  if (currentOperation === '/' && calculatorDisplay.textContent === '0') {
    alert("You can't divide by 0!");
    return;
  }
  secondOperand = calculatorDisplay.textContent;
  calculatorDisplay.textContent = roundResult(
    operate(currentOperation, firstOperand, secondOperand)
  );
  currentOperation = null;
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000;
}

function operate(operator, a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      if (b === 0) return null;
      else return a / b;
    default:
      return null;
  }
}