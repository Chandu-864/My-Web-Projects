const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let inputBox = document.querySelectorAll(".input-box");

createBtn.addEventListener("click", createNotes);

function createNotes() {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "NotesImages/delete.png";
    img.setAttribute("contenteditable", "false");
    notesContainer.appendChild(inputBox).appendChild(img);
};

notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName == "IMG") {
        e.target.parentElement.remove();
    }
})