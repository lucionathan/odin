const default_color = '#333333';

let color = default_color;

const grid = document.getElementById('grid');
const clearButton = document.getElementById('clearBtn');
const colorButton = document.getElementById('colorBtn');
const eraserButton = document.getElementById('eraserBtn');

eraserButton.addEventListener('click', eraserPen);
colorButton.addEventListener('click', colorPen);
clearButton.addEventListener('click', clearGrid);


function createGrid(size) {
	grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  
	for (let i = 0; i < size * size; i++) {
		const gridElement = document.createElement('div');
		gridElement.addEventListener('mouseover', function() {
			gridElement.style.backgroundColor = color;
		})
		grid.appendChild(gridElement).className = 'content';
	}
}

function clearGrid() {
	const content = document.getElementsByClassName('content'); 
	for(let i = 0; i < content.length; i++) {
		content[i].style.backgroundColor = 'white';
	}
}

function eraserPen() {
	color = 'white';
}

function colorPen() {
	color = default_color;
}


window.onload = () => {
	createGrid(16);
};
  
