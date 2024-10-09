const roll = document.getElementById('roll');
const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');

const min = 1;
const max = 6;

roll.onclick = function() {
    dice1.textContent = (Math.floor(Math.random() * max) + min);
    dice2.textContent = (Math.floor(Math.random() * max) + min);
}