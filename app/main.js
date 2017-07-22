import { initializeGrid, buildGameArr } from './Board/index.js';
import Shape from './Shape/index.js';
import { UNIT, CELL_WIDTH, CELL_HEIGHT } from './Constants/index.js';
import Color from './colors.js';
import { bindController } from './Controls/index.js';
import { writeToGrid, clearGameCanvas, drawUnit, renderBoardShapes, redrawShape, collided, addPoints } from './Board/mutators.js';
var gameArr = buildGameArr();

function startGame() {
	// startSong()
	startShape();
}
function startSong() {
	var context = new (window.AudioContext || window.webkitAudioContext)();
    var analyser = context.createAnalyser();
    var source; 
    var audio0 = new Audio();   
    audio0.src = require('./tetris-theme.mp3');
    audio0.controls = true;
    audio0.autoplay = true;
    audio0.loop = true;
    source = context.createMediaElementSource(audio0);
    source.connect(analyser);
    analyser.connect(context.destination);
}
var shapeCount = 0;
function startShape() {
	let shape = new Shape().generateShape();
	shapeCount++;
	bindController(shape, gameArr);
	let clear = setInterval(() => {
		addPoints(100);
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