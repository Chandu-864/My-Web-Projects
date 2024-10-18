
const display = document.getElementById('display');

function appendToDisplay(input){
    if ((display.value === "Error") || (display.value === "undefined")) {
        display.value = '0';
    }
    if (display.value === '0') {
        display.style.color = "white";
        display.value = input;
    }
    else {
        display.style.color = "white";
        display.value += input;
    }
}

function clearDisplay() {
    display.value = '0';
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
        display.style.color = "white";
    } catch (e) {
        display.value = "Error";
        display.style.color = "red";
    }
}


function clearOne() {
    if ((display.value === "Error") || (display.value === "undefined")) {
        display.style.color = "white";
        display.value = '0';
    }
    else {
        display.value = display.value.slice(0,-1);
    }
}


/*-------------keyboard-inputs----------------*/

document.addEventListener("keydown", keyBoard); // Pass the function name

function keyBoard(event) {
    const keyPressed = event.key;

    if (!isNaN(keyPressed) || ["+", "-", "*", "%"].includes(keyPressed)) {
        if (keyPressed === "*") {
            appendToDisplay("\u00D7")
        }
        else if (keyPressed === "%") {
            appendToDisplay("\u00F7");
        }
        else {
            appendToDisplay(keyPressed)
        }
    }

    if (keyPressed === "Enter") {
        calculate();
    }

    if (keyPressed === "Escape") {
        clearDisplay();
    }

    if (keyPressed === "Backspace") {
        clearOne();
    }
}