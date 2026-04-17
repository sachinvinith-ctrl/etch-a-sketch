const container = document.querySelector("#container");
container.style.display = "flex";

for(let i = 0; i < 16; i++) {

const parentDiv = document.createElement("div");
parentDiv.style.border = "2px solid black";
container.appendChild(parentDiv);

for(let i = 0; i < 15; i++) {

const childDiv = document.createElement("div");
childDiv.style.width = "30px";
childDiv.style.height = "30px";
childDiv.style.borderTop = "2px solid black";
parentDiv.appendChild(childDiv);

childDiv.addEventListener("mouseenter", () => childDiv.style.backgroundColor = "green");



}

}





