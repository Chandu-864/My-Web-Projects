const result = document.getElementById('result');
const decrease = document.getElementById('decreasebtn');
const reset = document.getElementById('resetbtn');
const increase = document.getElementById('increaesebtn');

let count = 0;

increase.onclick = function() {
    count++;
    result.textContent = count;
}

reset.onclick = function() {
    count = 0;
    result.textContent = count;
}

decrease.onclick = function() {
    count--;
    result.textContent = count;
}