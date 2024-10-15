const display = document.getElementById("display");
let startTime = 0;
let elaspsedTime = 0;
let timer = null;
let isRunning = false;

function start() {
    
    if(isRunning === false){
        startTime = Date.now() - elaspsedTime;
        timer = setInterval(update,10);
        isRunning = true;
    }
}

function stop() {

}

function reset() {
    
}

function update() {
    
    const currentTime = Date.now();
    elaspsedTime = currentTime - startTime;
    
}