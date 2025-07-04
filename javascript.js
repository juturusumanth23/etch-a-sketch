const container = document.querySelector("#container");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => createNewGrid(getGridSize()));

function getGridSize() {
    let size = prompt("Enter the Grid Size (value should be an integer between 1 to 100");
    if (size === null ) {
        size =16;
    } 
    while (size >100 ||size <1 || parseInt(size)!=size) {
        size = prompt("Enter the Grid Size (value should be an integer between 1 to 100")
        if (size === null) {
            size=16;
        }
    }
    return size; 
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
            let randomColor = getRandomColor();
            e.target.style.backgroundColor=randomColor;
        });
        
    }

}

createNewGrid(16);

function getRandomColor() {
    let r = Math.floor((Math.random())*256);
    let g = Math.floor((Math.random())*256);
    let b = Math.floor((Math.random())*256);
    return `rgb(${r},${g},${b})`;
}