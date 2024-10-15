
const display = document.getElementById('display');

function appendToDisplay(input){

    if ((display.value === "Error") || (display.value === "undefined")) {
        display.value = '';
    }

    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    if (display.value === "Error") {
        return; // Do nothing if there's already an error
    }
    try {
        // Replace the displayed symbols with the correct JavaScript operators
        const expression = display.value.replace(/\u00D7/g, "*").replace(/\u00F7/g, "/");
        
        // Evaluate the expression
        display.value = eval(expression);
    } catch (e) {
        display.value = "Error";
    }
}


function clearOne() {
    if ((display.value === "Error") || (display.value === "undefined")) {
        display.value = ''
    }
    display.value = display.value.slice(0,-1);
}


/*-------------keyboard-inputs----------------*/

document.addEventListener("keydown", keyboard); // Pass the function name

function keyboard(event) { // 'event' is passed automatically in event listeners
    const keyPressed = event.key; // Use 'event.key' to get the key

    // If the key is a number or an operator, append it to the display
    if (!isNaN(keyPressed) || ["+", "-", "*", "%"].includes(keyPressed)) {
        if (keyPressed === "*") {
            appendToDisplay("\u00D7");
        }
        else if (keyPressed === "%"){
            appendToDisplay("\u00F7");
        }
        else {
            appendToDisplay(keyPressed);
        }
    }

    // Handle the "Enter" key for calculation
    if (keyPressed === "Enter") {
        calculate()
    }
        

    // Handle the "Backspace" key to remove the last character
    if (keyPressed === "Backspace") {
        clearOne();
    }

    // Handle the "Escape" key to clear the display
    if (keyPressed === "Escape") {
        clearDisplay();
    }
}
