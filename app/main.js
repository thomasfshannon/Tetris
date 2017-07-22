import { initializeGrid, buildGameArr } from './Board/index.js';
import Shape from './Shape/index.js';
import { UNIT, CELL_WIDTH, CELL_HEIGHT } from './Constants/index.js';
import Color from './colors.js';
import { bindController } from './Controls/index.js';
import { writeToGrid, clearGameCanvas, drawUnit, renderBoardShapes, redrawShape, collided, addPoints } from './Board/mutators.js';
var gameArr = buildGameArr();

function startGame() {
	startShape();
}
var shapeCount = 0;
function startShape() {
	let shape = new Shape().generateShape();
	shapeCount++;
	console.log('shape count =>', shapeCount)
	console.log('shape color start =>', shape.color)
	bindController(shape, gameArr);
	let clear = setInterval(() => {
		addPoints(100);
		clearGameCanvas();
		let collisionCoords = collided(shape, gameArr);
		if(collisionCoords) {
			console.log('shape context in collisionCoords =>', shape.color)
			handleCollision(clear, shape, collisionCoords, shape.color)
		}

		renderBoardShapes(gameArr);
		if(!collisionCoords && handleCollision) {
			console.log('shape context before continueGame =>', shape.color)
			continueGame(shape);
		}
		
	}, shape.getSpeed());
}
function handleCollision(clear, shape, coords, color) {
	console.log('shape context in handle collision =>', shape.color)
	if(writeToGrid(shape, coords, gameArr, color) == 'end') {
		return gameOver(clear);
	}
	clearInterval(clear);
	setTimeout(() => startShape(), 200);
	return true;
}

function gameOver(clear) {
	clearInterval(clear);
	playAgain();
}

function playAgain() {
	let btn = document.getElementById('btn');
	btn.classList.remove('hidden');
	btn.addEventListener('click', function() {
		gameArr = buildGameArr();
		this.classList.add('hidden');
		startGame();
	});
}

function continueGame(shape) {
	redrawShape(shape);
	shape.descend();
	
}

startGame();