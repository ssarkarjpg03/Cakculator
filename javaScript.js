// Appends values to the display screen
function number(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Clears the display screen
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

// Calculates the result of the expression
function calculateResult() {
    const display = document.getElementById('display');
    display.value = eval(display.value);
}