
let answer;



const button = document.querySelector("button");
button.addEventListener ("click", () => { answer = 

prompt("Please enter number for which you want to add grids") 


const container = document.querySelector("#container");
container.style.display = "flex";


for(let i = 0; i < answer; i++) {

const parentDiv = document.createElement("div");
parentDiv.style.border = "2px solid black";
container.appendChild(parentDiv);


for(let i = 0; i < answer; i++) {

const childDiv = document.createElement("div");
childDiv.style.borderTop = "2px solid black";
childDiv.style.minWidth = "30px";
childDiv.style.minHeight = "30px";
parentDiv.appendChild(childDiv);

childDiv.addEventListener("mouseenter", () => childDiv.style.backgroundColor = "green");

}

}


} 

)




