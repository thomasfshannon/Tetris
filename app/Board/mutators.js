import { UNIT, CELL_WIDTH, CELL_HEIGHT, Colors } from '../Constants/index.js';
import { initializeGrid, buildGameArr } from './index.js';
var CTX = initializeGrid();

export function writeToGrid(shape, coords, gameArr) {
	let color = shape.getColor();
	for(var i = 0; i < coords.length; i++) {
		if(gameArr[coords[i][1] -1]) {
			gameArr[coords[i][1] -1][coords[i][0]] = color;
			cutArr(gameArr)
		} else {
			return 'end';
		}
	}

}

function cutArr(gameArr) {
	for(var i = 0; i < gameArr.length -1; i++) {
		if(gameArr[i].every(num => num !== 0)) {
			gameArr.splice(i, 1);
			gameArr.unshift([0,0,0,0,0,0,0,0,0,0]);
		}
	}
}

export function renderBoardShapes(gameArr) {
	gameArr.forEach((item, lineIndex) => {
		item.forEach((block, i) => {
			if(block !== 0) {
				drawUnit(i,lineIndex, block, CTX)
			}
		}) 
	})
}

export function clearGameCanvas() {
	CTX.clearRect(0, 0, CELL_WIDTH * UNIT, CELL_HEIGHT * UNIT)
}

export function drawUnit(x, y, num) {
	CTX.fillStyle = Colors[num];
	CTX.fillRect(x * UNIT, y * UNIT, UNIT -1, UNIT -1);
}


export function collided(shape, gameArr) {
	var positions = shape.getCoords();
	for(var i = 0; i < positions.length; i++) {
		if(gameArr[positions[i][1]][positions[i][0]]) {
			return positions;
		}
	}
	
}