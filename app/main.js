import { initializeGrid, buildGameArr } from './Board/index.js';
import Shape from './Shape/index.js';
import { UNIT, CELL_WIDTH, CELL_HEIGHT } from './Constants/index.js';
import Color from './colors.js';
import { bindController } from './Controls/index.js';
import { writeToGrid, clearGameCanvas, drawUnit, renderBoardShapes, collided } from './Board/mutators.js';
var gameArr = buildGameArr();
var speed = 10;


function startGame() {
	startShape();
}

function startShape() {
	var shape = new Shape().generateShape();
	bindController(shape, gameArr);
	var clear = setInterval(() => {
		clearGameCanvas();
		var collisionCoords = collided(shape, gameArr);
		if(collisionCoords) {
			if(collisionCoords == 'stop') {
				return;
			}
			handleCollision(clear, shape, collisionCoords)
			
		}
		renderBoardShapes(gameArr);
		continueGame(shape);
	}, speed);
}

function handleCollision(clear, shape, coords) {
	if(writeToGrid(shape, coords, gameArr) == 'end') {
		return gameOver(clear);
	}
	clearInterval(clear);
	setTimeout(() => startShape(),200)
}

function gameOver(clear) {
	clearInterval(clear);
	playAgain();
}

function playAgain() {
	var btn = document.getElementById('btn');
	btn.classList.remove('hidden');
	btn.addEventListener('click', function() {
		gameArr = buildGameArr();
		this.classList.add('hidden');
		startGame();
	});
}

function continueGame(shape) {
	redrawShape(shape.getMatrix(), shape.getX(), shape.getY());
	shape.descend();
	
}

function redrawShape(matrix, x, y) {
	matrix.forEach((line, lineIndex) => {
		line.forEach((item, i) => {
			if(item !== 0) {
				drawUnit(i + x, lineIndex + y, item)
			}
		})
	})
}

startGame();