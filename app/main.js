import { initializeGrid, buildGameArr } from './Board/index.js';
import Shape from './Shape/index.js';
import Game from './Game/index.js';
import { UNIT, CELL_WIDTH, CELL_HEIGHT } from './Constants/index.js';
import Color from './colors.js';
import { bindController } from './Controls/index.js';
import { writeToGrid, clearGameCanvas, drawUnit, renderBoardShapes, redrawShape, collided, addPoints, clearPoints } from './Board/mutators.js';
var gameArr = buildGameArr();

function startGame() {
	let game = new Game();
	game.startSong()
	renderList();
	startShape();
}


function startShape() {
	let shape = new Shape().generateShape();
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
	let scores = document.getElementById('score-wrap');
	btn.classList.remove('hidden');
	scores.classList.remove('hidden');
	btn.addEventListener('click', function() {
		gameArr = buildGameArr();
		this.classList.add('hidden');
		scores.classList.add('hidden');
		clearPoints(0);
		startGame();
	});
}

function continueGame(shape) {
	redrawShape(shape);
	shape.descend();
	
}

startGame();
function renderList() {
	let scores = localStorage.getItem('scores');
	if(scores) {
		let str = '';

		JSON.parse(scores).forEach((item, i) => {
			str+=`<li> ${i + 1} - ${item.points}</li>`
		});

		str = `<ul>${str}</ul>`;
		document.getElementById('scores').innerHTML = str;
	}
}