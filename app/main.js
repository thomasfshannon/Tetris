import BOARD from './Board/index.js';
import Shape from './Shape/index.js';
import GAME from './Game/index.js';
import { UNIT, CELL_WIDTH, CELL_HEIGHT } from './Constants/index.js';
import Color from './colors.js';
import { bindController } from './Controls/index.js';
import { writeToGrid, clearGameCanvas, drawUnit, renderBoardShapes, redrawShape, collided, addPoints, clearPoints } from './Board/mutators.js';
var gameArr;

function startGame() {
	GAME.autoPlay();
	gameArr = BOARD.buildGameArr();
	GAME.renderList();
	startShape();
}

function startNew() {
	gameArr = BOARD.buildGameArr();
	GAME.renderList();
	startShape();
}


function startShape() {
	let shape = new Shape().generateShape();
	bindController(shape, gameArr);
	let clear = setInterval(() => {
		GAME.addPoints(100);
		clearGameCanvas();
		let collisionCoords = collided(shape, gameArr);
		if(collisionCoords) {
			handleCollision(clear, shape, collisionCoords, shape.color)
		}

		renderBoardShapes(gameArr);
		if(!collisionCoords && handleCollision) {
			continueGame(shape);
		}
		
	}, shape.getSpeed());
}
function handleCollision(clear, shape, coords, color) {
	if(writeToGrid(shape, coords, gameArr, color) == 'end') {
		redrawShape(shape);
		return gameOver(clear);
	}
	clearInterval(clear);
	setTimeout(() => startShape(), 200);
	return true;
}

function gameOver(clear) {
	clearInterval(clear);
	GAME.playAgain(startNew);
}



function continueGame(shape) {
	redrawShape(shape);
	shape.descend();
	
}



startGame();