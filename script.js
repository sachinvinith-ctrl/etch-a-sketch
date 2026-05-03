
const container = document.querySelector("#container");
container.style.width = "500px";
container.style.height = "500px";
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.border = "2px dotted black";


for(let i = 0; i < 256; i++) {

const childDiv = document.createElement("div");
childDiv.style.border = "2px solid black";
childDiv.style.flex = "1";
childDiv.style.flexBasis = "6.25%"
container.appendChild(childDiv);

}

