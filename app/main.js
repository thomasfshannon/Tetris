import { initializeGrid, buildGameArr } from './buildGrid.js';
import Shapes from './shapes.js';
import { UNIT, CELL_WIDTH, CELL_HEIGHT } from './constants.js';
// import './controls.js';

var CTX = initializeGrid();
var gameArr = buildGameArr();
var xOffset = 0;

function generateShape() {
	return Shapes[4];
}

function startGame() {
	var shape = generateShape();
	var shapeMod;
	var y = 0;
	var shapeTime = setInterval(() => {
		clearCanvas();
		shape.map((line, lineIndex) => {
			return line.map((item, i) => {
				if(item == 1) {
					drawUnit(xOffset + i, lineIndex + item + y)
				}
				return lineIndex + item + y;
				
			})
		})
		if(y > CELL_HEIGHT - 4) {
			console.log(shape)
			writeToGrid(shape, xOffset, y)
			clearInterval(shapeTime)
		}
		y++;
	}, 100);

	
}

function writeToGrid(shape, xOffset, yOffset) {
	var shapeMod = shape.map((line, lineIndex) => {
		return line.map((item, i) => {
			if(item == 1) {
				return xOffset + i, lineIndex + item + yOffset
			}
			return 0;
		})
	})
	
	shapeMod.forEach((line, lineIndex) => {
		line.forEach((item, i) => {
			console.log('item => ',item)
			if(item > 0) {
				gameArr[yOffset + lineIndex][i] = 1;
			}
		})
	})

	console.log('g',gameArr)

}

function drawUnit(x,y) {
	CTX.fillStyle = 'red';
	CTX.fillRect(x * UNIT, y * UNIT, UNIT, UNIT);
}

startGame();

function clearCanvas() {
	CTX.clearRect(0, 0, CELL_WIDTH * UNIT, CELL_HEIGHT * UNIT)
}


document.addEventListener('keydown', function(e) {
	switch(e.code) {
		case 'ArrowLeft':
			xOffset -= 1;
			console.log('a',xOffset)
			break;
		case 'ArrowRight':
			xOffset += 1;
			console.log('b',xOffset)
			break;
		case 'ArrowUp':
			// do nothing
			break;
		case 'ArrowDown':
			// 
			break;
		default:
			break;
	}	
});

