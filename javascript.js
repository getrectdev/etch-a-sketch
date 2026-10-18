celContainer = document.getElementById("cel-container");

function loadCels () {
    let width = 4;
    let height = 4;
    
    for (let i=0; i<4096; i++) {
        let newDiv = document.createElement("div");
        newDiv.id = "cel";
        newDiv.addEventListener("mouseenter", () => {
            newDiv.style.backgroundColor = "red";
        });
        newDiv.style.width = "6px";
        celContainer.appendChild(newDiv);

    }
}

function resetGrid() { 
    // delete cels 
    for (let cel of Array.from(celContainer.children)) cel.remove();
    let cols = prompt("Enter number of columns: ");
    let width = 512/cols;
    for (let i=0; i<(cols*cols); i++) {
        let newDiv = document.createElement("div");
        newDiv.id = "cel";
        newDiv.addEventListener("mouseenter", () => {
            newDiv.style.backgroundColor = "red";
        });
        newDiv.style.width = (width-2) + "px";
        celContainer.appendChild(newDiv);
    }
}

loadCels()