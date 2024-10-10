const temp = document.getElementById('temperature');
const toFahren = document.getElementById('toFahrenhiet');
const toCelsius = document.getElementById('toCelsius');
const Result = document.getElementById('result');

let temperatureInput;

function convert() {
    if(toFahren.checked) {
        temperatureInput = Number(temp.value);
        temperatureInput = (temperatureInput)*(9/5)+32;
        Result.textContent = temperatureInput.toFixed(1) + '℉';
        Result.style.color = 'black';
    }
    else if (toCelsius.checked){
        temperatureInput = Number(temp.value);
        temperatureInput = (temperatureInput-32)*(5/9);
        Result.textContent = temperatureInput.toFixed(1) + '℃';
        Result.style.color = 'black';
    }
    else {
        Result.textContent = " Please select a type";
        Result.style.color = 'black';
    }   
}