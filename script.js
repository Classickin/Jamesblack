// Get display element
const display = document.getElementById('displayScreen');

// Get all calculator buttons
const buttons = document.querySelectorAll('.button');

// Get special buttons
const clearAll = document.getElementById('clearAll');
const clearEntry = document.getElementById('clearEntry');

// Function to update display
function appendToDisplay(value) {
    // Prevent multiple consecutive operators
    const operators = ['+', '-', '*', '/', '%'];
    const lastChar = display.value.slice(-1);

    if (operators.includes(lastChar) && operators.includes(value)) {
        return; // Ignore if last and current are both operators
    }

    display.value += value;
}

// Add click listeners to all number/operator buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === '=') {
            try {
                // Replace "x" with "*" if used
                const expression = display.value.replace(/x/g, '*');
                display.value = eval(expression);
            } catch (e) {
                display.value = "Error";
            }
        } else {
            appendToDisplay(value);
        }
    });
});

// Clear All (AC)
clearAll.addEventListener('click', () => {
    display.value = '';
});

// Clear Entry (CE) - remove last character
clearEntry.addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
});
