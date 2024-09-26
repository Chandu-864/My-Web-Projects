var tablinks = document.getElementsByClassName("tab-links");
var tablecontents = document.getElementsByClassName("table-contents");

function opentab(tabname){
    for(x of tablinks){
        x.classList.remove("active-link");
    }
    for(y of tablecontents){
        y.classList.remove("active-table");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-table");
}

function openMenu() {
    console.log("open menu clicked");
    document.getElementById("sidemenu").style.display = "block";
}

function closeMenu() {
    console.log("close menu clicked");
    document.getElementById("sidemenu").style.display = "none";
}


var headerContent = document.getElementById('header');

//--------------------------------------intersection observer for projects page-----------------------------//

const items = document.querySelectorAll(".projects-item");
const options = {
    root: null,
    threshold: 0.1
};

const observer = new IntersectionObserver(callback, options);

function callback(entries, observe) {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("scrollAnimation");
            observer.unobserve(entry.target);
        }
        else {
            return;
        }
    });
}

items.forEach(item => {
    observer.observe(item);
});

//-------------------------------dark and light mode----------------------------------------//

let darkMode = document.getElementById("mode");
let iconElement = document.querySelector("#mode i");
contactBackground = document.getElementById("background");

let iconChange = document.querySelector("#mode i");


darkMode.onclick = function() {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        iconChange.className = "fa-solid fa-sun"
        iconChange.style.color = "#FFE469"
        localStorage.setItem("darkMode", "enabled");
    }
    else {
        localStorage.setItem("darkMode", "disabled");
        iconChange.className = "fa-solid fa-moon";
        iconChange.style.color = "black"
    }
}

window.onload = function() {
    if (localStorage.getItem("darkMode")=== "enabled") {
        document.body.classList.toggle("dark-mode");
        iconChange.className = "fa-solid fa-sun"
        iconChange.style.color = "#FFE469"
    }
}