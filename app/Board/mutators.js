import { UNIT, CELL_WIDTH, CELL_HEIGHT, Colors } from '../Constants/index.js';
import { initializeGrid, buildGameArr } from './index.js';
var CTX = initializeGrid();
var points = 0;
var lineCount = 0;
export function writeToGrid(shape, coords, gameArr, color) {
	// writes to game grid and returns game end if coords are out of bounds
	for(var i = 0; i < coords.length; i++) {
		if(gameArr[coords[i][1]]) {
			gameArr[coords[i][1]][coords[i][0]] = color;
			gameArr = chopLine(gameArr);
		} else {
			setScore()
			return 'end';
		}
	}

}

function chopLine(gameArr) {
	for(let row = 0; row < gameArr.length -1; row++) {
		if(gameArr[row].every(num => num !== 0)) {
			gameArr.splice(row, 1);
			gameArr.unshift([0,0,0,0,0,0,0,0,0,0]);
			addPoints(500);
			addLine(1);

		}
	}
	return gameArr;
}

export function addPoints(add) {
	points = points + add;
	document.getElementById('points').innerHTML = points;
}

export function clearPoints(clear) {
	points = clear
	document.getElementById('points').innerHTML = points;
}

function addLine(num) {
	lineCount = lineCount + num;
	document.getElementById('line').innerHTML = lineCount;
}

function setScore() {
	let scores = localStorage.getItem('scores');
	if(!scores) {
		localStorage.setItem('scores', JSON.stringify([{id: 1,points: points, lineCount: lineCount}]))
	} else {
		let newScores = JSON.parse(scores);
		newScores.push({
			points: points,
			lineCount: lineCount
		});

		var sorted = newScores.sort((a, b) => {
			return a.points < b.points;
		})

		let cut = sorted.slice(0, 10);
		cut.sort((a, b) => {
			return a.points < b.points;
		})
		
		localStorage.setItem('scores', JSON.stringify(cut))

	}
}

export function renderBoardShapes(gameArr) {
	for(let row = 0; row < gameArr.length; row++) {
		for(let block = 0; block < gameArr[row].length; block++) {
			if(gameArr[row][block] !== 0) {
				drawUnit(block, row, gameArr[row][block])
			}
		}
	}
}

export function redrawShape(shape) {
	shape.getCoords().forEach((coord) => {
		drawUnit(coord[0], coord[1], shape.color)
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
			// returns explicit y offset since it is at collision point
			return positions.map((item, i) => [item[0], item[1] - 1])
		}
	}
}