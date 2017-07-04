import { initializeGrid } from './app/buildGrid.js';
import Tetro from './app/shapes.js';
import { SHAPES, UNIT, CELL_WIDTH, CELL_HEIGHT, CTX } from './app/constants.js';

initializeGrid();

function drawRandomShape() {
	var random = Math.ceil((Math.random() * SHAPES.length) - 1);
	var shape = Tetro[SHAPES[random]];
	return shape;

}

function positionRandomShape(shape) {


}

function gameStart() {
	var current = drawRandomShape();
	shapeStartPos(current)
}

function shapeStartPos(instance) {
	var xPos = 5;
	dropDown(instance, xPos);
}

function dropDown(instance, xPos) {
	var y = 0;
	var interval = setInterval(() => {
		CTX.clearRect(0, 0, CTX.canvas.width, CTX.canvas.height);
		if(y < 20) {
			instance(xPos, y++);
		} else {
			clearInterval(interval);
		}
	},1000);
	
}
gameStart();


// start game
// make shape
// increment y current shape
// checker array 
// merge shape into array
// comparison as moves downward






