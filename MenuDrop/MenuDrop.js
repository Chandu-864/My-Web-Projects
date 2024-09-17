var selectField = document.getElementById("selectfield");
var selectText = document.getElementById("selecttext");
var options = document.getElementsByClassName("options");
var list = document.getElementById("list");
var arrow = document.getElementById("arrow");

selectField.onclick = function() {
    list.classList.toggle('hide');
    arrow.classList.toggle('arrowIcon');
}

for(option of options){
    option.onclick = function(){
        selectText.innerHTML = this.textContent;
        list.classList.toggle('hide');
        arrow.classList.toggle('arrowIcon');
    }
}

