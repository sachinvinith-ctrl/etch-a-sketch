const container = document.querySelector("#container");
container.style.display = "flex";

for(let i = 0; i < 16; i++) {

const gridRowDiv = document.createElement("div");
gridRowDiv.textContent = "divs";
gridRowDiv.style.border = "5px solid black";
container.appendChild(gridRowDiv);




}
