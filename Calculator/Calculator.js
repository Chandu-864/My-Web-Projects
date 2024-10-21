
const display = document.getElementById('display');

function operatorCheck(char) {
    return ["+", "-", "\u00D7", "\u00F7", "."].includes(char);
}

function appendToDisplay(input){
    
    if (display.value === '0') {
        if (operatorCheck(input)) {
            display.value += input;
        }else {
            display.value = input;
        }
        return;
    }
    if ((display.value === "Error") || (display.value === "undefined") || (display.value === "Infinity") || (display.value === "NaN")) {
        if (["+", "-", "\u00D7", "\u00F7"].includes(input)) {
            display.value = '0'
        }
        else if (input === '.') {
            display.value = '0' + input; 
        }
        else {
            display.value = input;
        }
        return;
    }
    
    const lastChar = display.value.slice(-1);

    if (input === '.') {
        const numbers = display.value.split(/[+\-\u00D7\u00F7]/);
        const lastNumber = numbers[numbers.length-1];

        if(lastNumber.includes('.')) {
            return;
        }
        if (operatorCheck(lastChar) || display.value === '0') {
            display.value += '0' + input;
        }
        else {
            display.value += input;
        }
        return;
    }

    if ((operatorCheck(input) && operatorCheck(lastChar) )) {
        return;
    }

    display.style.color = "white";
    display.value += input;
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

        display.value = (Math.round(((eval(expression))*1000)) / 1000);

        // display.value = eval(expression);
        display.style.color = "white";
    } catch (e) {
        display.value = "Error";
        display.style.color = "red";
    }
}


function clearOne() {
    if ((display.value === "Error") || (display.value === "undefined") || (display.value === "Infinity") || (display.value === "NaN")) {
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

    if (!isNaN(keyPressed) || ["+", "-", "*", "%", "."].includes(keyPressed)) {
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
        event.preventDefault();
        calculate();
    }

    if (keyPressed === "Escape") {
        event.preventDefault();
        clearDisplay();
    }

    if (keyPressed === "Backspace") {
        event.preventDefault();
        clearOne();
    }
}
