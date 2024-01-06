let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperator(operator) {
    currentInput += ' ' + operator + ' ';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function validateInput(event) {
    let inputValue = event.target.value;
    inputValue = inputValue.replace(/[^0-9.+\-*/]/g, '');
    event.target.value = inputValue;
    currentInput = inputValue;
    updateDisplay();
}

function calculate() {
    try {
        let result = eval(currentInput);
        currentInput = result;
        updateDisplay(); 
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    display.value = currentInput;
}