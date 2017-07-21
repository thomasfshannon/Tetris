import { initializeGrid, buildGameArr } from './Board/index.js';
import Shape from './Shape/index.js';
import { UNIT, CELL_WIDTH, CELL_HEIGHT } from './Constants/index.js';
import Color from './colors.js';
import { bindController } from './Controls/index.js';
import { writeToGrid, clearGameCanvas, drawUnit, renderBoardShapes, collided } from './Board/mutators.js';

var speed = 300;


function startGame() {
	startShape();
}

function startShape() {
	var shape = new Shape().generateShape();
	bindController(shape);
	var clear = setInterval(() => {
		clearGameCanvas();
		var collision = collided(shape)
		collision ? handleCollision(clear, shape, collision) : continueGame(shape)
		renderBoardShapes();
	}, speed);
}

function handleCollision(clear, shape, coords) {
	writeToGrid(shape.getMatrix(), coords);
	clearInterval(clear);
	setTimeout(() => startShape(),0)
}

function continueGame(shape) {
	redrawShape(shape.getMatrix(), shape.getX(), shape.getY());
	shape.descend();
	
}

function redrawShape(matrix, x, y) {
	matrix.forEach((line, lineIndex) => {
		line.forEach((item, i) => {
			if(item !== 0) {
				drawUnit(i + x, lineIndex + y, line)
			}
		})
	})
}

startGame();