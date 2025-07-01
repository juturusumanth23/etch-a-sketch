const container = document.querySelector("#container");
let divsCount = 16;

for (let i=0;i<divsCount**2;i++) {
    const div = document.createElement("div");
    
    container.appendChild(div);
    div.addEventListener("mouseenter", (e)=> {
        e.target.style.backgroundColor="green";
    });
    
}