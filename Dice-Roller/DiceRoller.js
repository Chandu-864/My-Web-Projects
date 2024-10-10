
function rollDice() {
    const noOfDice = document.getElementById('noOfDice').value;
    const result = document.getElementById('result');
    const image = document.getElementById('image');

    let values  = [];
    let images = [];

    for(let i = 0; i < noOfDice; i++) {
        const randomNum = Math.floor((Math.random()*6)+ 1);
        values.push(randomNum);

        if (randomNum === 1){
            images.push(`<i class="fa-solid fa-dice-one"></i>`);
        }
        else if (randomNum === 2){
            images.push(`<i class="fa-solid fa-dice-two"></i>`)
        }
        else if(randomNum === 3){
            images.push(`<i class="fa-solid fa-dice-three"></i>`)
        }
        else if (randomNum === 4){
            images.push(`<i class="fa-solid fa-dice-four"></i>`)
        }
        else if(randomNum === 5){
            images.push(`<i class="fa-solid fa-dice-five"></i>`)
        }
        else if (randomNum === 6){
            images.push(`<i class="fa-solid fa-dice-six"></i>`)
        }
    }

    result.textContent = "Dice: " + values.join(', ');
    image.innerHTML = images.join(' ');
}