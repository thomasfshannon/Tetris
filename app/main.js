import { initializeGrid, buildGameArr } from './Board/index.js';
import Shape from './Shape/index.js';
import { UNIT, CELL_WIDTH, CELL_HEIGHT } from './Constants/index.js';
import Color from './colors.js';
import { bindController } from './Controls/index.js';
import { writeToGrid, clearGameCanvas, drawUnit, renderBoardShapes, collided } from './Board/mutators.js';
var gameArr = buildGameArr();
var speed = 1000;


function startGame() {
	startShape();
}

function startShape() {
	var shape = new Shape().generateShape();
	bindController(shape, gameArr);
	var clear = setInterval(() => {
		clearGameCanvas();
		var collisionCoords = collided(shape, gameArr)
		collisionCoords ? handleCollision(clear, shape, collisionCoords) : continueGame(shape)
		renderBoardShapes(gameArr);
	}, speed);
}

function handleCollision(clear, shape, coords) {
	writeToGrid(shape.getMatrix(), coords, gameArr);
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