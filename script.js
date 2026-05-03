
const container = document.querySelector("#container");
container.style.width = "500px";
container.style.height = "500px";
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.border = "2px solid black";


for(let i = 0; i < 256; i++) {

const childDiv = document.createElement("div");
childDiv.style.border = "1px solid black";
childDiv.style.flex = "1";
childDiv.style.flexBasis = "6.25%"
container.appendChild(childDiv);

childDiv.addEventListener("mouseenter", () => childDiv.style.backgroundColor = "green");

}

let userInput;

const button = document.querySelector("button");
button.addEventListener("click", function() { userInput = prompt("Please enter a new div size")
container.replaceChildren();

for(let i = 0; i < userInput * userInput; i++) {

const childDiv = document.createElement("div");
childDiv.style.border = "1px solid black";
childDiv.style.flex = "1";
childDiv.style.flexBasis = (100 / userInput) + "%";
container.appendChild(childDiv);

}

});


