import { UNIT, CELL_WIDTH, CELL_HEIGHT, Colors } from '../Constants/index.js';
import { initializeGrid, buildGameArr } from './index.js';
var CTX = initializeGrid();

export function writeToGrid(shape, coords, gameArr) {
	coords.forEach((coord) => {
		gameArr[coord[1] -1][coord[0]] = 1;
	})
}

export function renderBoardShapes(gameArr) {
	gameArr.forEach((item, lineIndex) => {
		item.forEach((item, i) => {
			if(item !== 0) {
				drawUnit(i,lineIndex, item, CTX)
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