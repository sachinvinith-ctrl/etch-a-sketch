const container = document.querySelector("#container");
container.style.display = "flex";

for(let i = 0; i < 16; i++) {

const div = document.createElement("div");
div.textContent = "div1";
div.style.border = "3px solid black";
container.appendChild(div);

for(let i = 0; i < 15; i++) {

const div1 = document.createElement("div");
div1.textContent = "div2";
div1.style.border = "1px solid black";
div.appendChild(div1);

}

}



