let displayValue = '';

function addToDisplay(value) {
    displayValue += value;
    document.getElementById('result').innerText = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('result').innerText = displayValue;
}

function backspace() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('result').innerText = displayValue;
}

function operate(operator) {
    switch (operator) {
        case '%':
            displayValue += '/100';
            break;
        case '**':
            displayValue = Math.pow(displayValue, 2);
            break;
        case 'AC':
            clearDisplay();
            break;
        case '=':
            calculate();
            break;
        default:
            displayValue += operator;
            break;
    }
    document.getElementById('result').innerText = displayValue;
}

function calculate() {
    let result;
    try {
        result = eval(displayValue);
    } catch (error) {
        result = 'Error';
    }
    document.getElementById('result').innerText = result;
    displayValue = '';
}
