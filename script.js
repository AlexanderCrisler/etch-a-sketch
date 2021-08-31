const container = document.getElementById("container");
const element = document.querySelectorAll(".grid-item");

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

function makeRows(rows, cols) {
  removeAllChildNodes(container);

  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);

  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";

    cell.addEventListener("mouseover", event => {
      cell.style.setProperty('background-color', 'black');
    });
  };
};

makeRows(16, 16);

const clearbtn = document.getElementById("clear-btn");

function clearRows() {
  element.forEach(ele => ele.style.setProperty('background-color', 'white'));

  var size = prompt("How many pixels would you like?", 16);

  if (size != null && size <= 1000 && size >= 1) {
    makeRows(size, size);
  } 
}

clearbtn.addEventListener("click", clearRows);