import { initializeGrid, buildGameArr } from './buildGrid.js';
import Shape from './shapes.js';
import { UNIT, CELL_WIDTH, CELL_HEIGHT } from './constants.js';
import Color from './colors.js';
// import './controls.js';

var CTX = initializeGrid();
var gameArr = buildGameArr();
var xOffset = 0;
var rotationIndex = 0;

function startGame() {
	var shape = (new Shape).generateShape(2);
	setInterval(() => {
		clearCanvas();
		// renderBoardShapes();
		shape.descend();
		redrawShape(shape.getMatrix(), shape.getX(), shape.getY());
	}, 1000);

	
}

function collisionCheck(shape, xOffset, yOffset, interval) {
	// map over shape and check gameArr gameArr[x][y]
	shape.forEach((item, i) => {
		if(gameArr[yOffset][i] !== 0 || yOffset == 19) {
			writeToGrid(shape, xOffset, yOffset)
			clearInterval(interval)
			moveShape();
		}
	});
}

function renderBoardShapes() {
	gameArr.forEach((item, lineIndex) => {
		item.forEach((item, i) => {
			if(item !== 0) {
				drawUnit(i,lineIndex, i)
			}
		}) 
	})
}

function redrawShape(matrix, x, y) {
	matrix.forEach((line, lineIndex) => {
		line.forEach((item, i) => {
			if(item !== 0) {
				drawUnit(i + x, lineIndex + y, i)
			}
		})
		
	})
}

function writeToGrid(shape, xOffset, yOffset) {
	var shapeMod = shape.map((line, lineIndex) => {
		return line.map((item, i) => {
			if(item !== 0) {
				return xOffset + i, lineIndex + item + yOffset
			}
			return 0;
		})
	})
	
	shapeMod.forEach((line, lineIndex) => {
		line.forEach((item, i) => {
			if(item !== 0) {
				gameArr[yOffset + lineIndex][i + xOffset] = 1;
			}
		})
	})
}

function drawUnit(x, y) {
	console.log(x,y)
	CTX.fillStyle = 'red';
	CTX.fillRect(x * UNIT, y * UNIT, UNIT -1, UNIT -1);
}

startGame();

function clearCanvas() {
	CTX.clearRect(0, 0, CELL_WIDTH * UNIT, CELL_HEIGHT * UNIT)
}


document.addEventListener('keydown', function(e) {
	switch(e.code) {
		case 'ArrowLeft':
			xOffset -= 1;
			break;
		case 'ArrowRight':
			xOffset += 1;
			break;
		case 'ArrowUp':
			if(rotationIndex < 3) {
				rotationIndex++;
				return;
			}
			rotationIndex = 0;

			break;
		case 'ArrowDown':
			// 
			break;
		default:
			break;
	}	
});