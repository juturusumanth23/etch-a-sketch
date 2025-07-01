const container = document.querySelector("#container");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => createNewGrid(getGridSize()));

function getGridSize() {
    return prompt("Enter the Grid Size");
}

function createNewGrid(gridSize) {

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for (let i=0;i<gridSize**2;i++) {
        const div = document.createElement("div");
        const divWidth = 800/gridSize + "px";
        const divHeight = 800/gridSize + "px";
        div.setAttribute("style",`width:${divWidth}; height:${divHeight}`);
        
        container.appendChild(div);
        div.addEventListener("mouseenter", (e)=> {
            e.target.style.backgroundColor="green";
        });
        
    }

}

createNewGrid(16);
