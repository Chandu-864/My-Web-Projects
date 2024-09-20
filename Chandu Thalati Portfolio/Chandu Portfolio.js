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


var contactDetails = document.getElementById('contact-information');

contactDetails.addEventListener('click', function() {
    this.style.display = 'none';
})