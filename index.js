// Generate Grid
window.addEventListener('load', createGrid);

const gridContainer = document.getElementById('grid-container');

function createGrid(){
  setGridSize(16);
  fillGrid(16);
}

function setGridSize(size){
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function fillGrid(size){
  for(let i = 0; i < size * size; i++){
    const gridElement = document.createElement('div');
    gridElement.classList.add('grid-element');
    gridElement.addEventListener('mouseover', changeColor);
    gridContainer.appendChild(gridElement);
    }
}

// User Events

function changeColor(event){
  event.target.style.backgroundColor = 'black';
}