const container = document.querySelector("#container");
container.style.display = "flex";




const gridRowContainerDiv = document.createElement("div");
container.appendChild(gridRowContainerDiv);
gridRowContainerDiv.style.display = "flex"
gridRowContainerDiv.style.flexDirection = "column";





for(let i = 0; i < 16; i++) {


const gridRowDiv = document.createElement("div");
gridRowDiv.textContent = "divs";
gridRowDiv.style.border = "5px solid black";
gridRowContainerDiv.appendChild(gridRowDiv);




}

