
document.addEventListener("DOMContentLoaded", function() {
    let hours = document.getElementById("hrs");
    let minutes = document.getElementById("mins");
    let seconds = document.getElementById("secs");

    updateClock =() => {
        let currentTime = new Date();

        hours.innerHTML = currentTime.getHours().toString().padStart(2, '0');
        minutes.innerHTML = currentTime.getMinutes().toString().padStart(2,'0');
        seconds.innerHTML = currentTime.getSeconds().toString().padStart(2, '0');
    }
    updateClock();
    setInterval(updateClock, 1000);
});
