const notesContainer = document.querySelector(".Notes-container");
const createBtn = document.querySelector(".btn");
let Notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}   

function showNotes(){
    localStorage.setItem(", notesContainer.innerHTM");
}

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/3.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})
notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "p"){
        Notes = document.querySelectorAll(".input-box");
        Notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event => {
if(event.key === "Enter"){
    document.execCommand("insertLineBreak");
    event.preventDefault();
}
})
