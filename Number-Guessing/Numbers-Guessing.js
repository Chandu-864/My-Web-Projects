
const minNum = 1;
const maxNum = 100;

const answer = Math.floor(Math.random() *(maxNum-minNum) + 1) + minNum;

let attempts = 0;
let guess;
let running = true;

console.log(answer)

while(running) {
    guess = window.prompt(`Enter a number between ${minNum} and ${maxNum}`);
    guess = Number(guess)
    console.log(guess)

    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if((guess < minNum) || (guess > maxNum)) {
        window.alert("Enter a number between 1 and 100");
    }
    else {
        attempts++;
        if (guess > answer){
            window.alert("Your guess is a big number than answer")
        }
        else if (guess < answer){
            window.alert("Your guess is a small number than answer")
        }
        else {
            window.alert(`Correct! The answer is ${answer}. It took you ${attempts} attempts.`)
            running = false;
        }
    }
}