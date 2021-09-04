const color = '#333333';

const grid = document.getElementById('grid');
const clearButton = document.getElementById('clearBtn');

clearButton.addEventListener('click', clearGrid)

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
	console.log('mizera');
}



window.onload = () => {
	createGrid(16);
};
  
