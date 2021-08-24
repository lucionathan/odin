const container = document.getElementById("container");
console.log(container.innerText)
function makeRows(rows, columns) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-columns", columns);
    for (let i = 0; i < (rows*columns); i++) {
        let cell = document.createElement("div");
        cell.className = "grid-item";
        cell.innerText = i+1;
        container.appendChild(cell);
    }
}

makeRows(16,16);