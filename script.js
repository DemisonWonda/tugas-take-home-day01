const notesContainer = document.querySelector(".Notes-container");
const createBtn = document.querySelector(".btn");
let Notes = document.querySelectorAll(".input-box");

createBtn.addEventListener("click", ()=>{
    let inputBox = document. createElement("p");
    let img = document. createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/3.png";
    notesContainer.appendChild(inputBox).appendChild(img);

})