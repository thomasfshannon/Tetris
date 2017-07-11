import { initializeGrid, buildGameArr } from './buildGrid.js';
import Shapes from './shapes.js';
import { UNIT, CELL_WIDTH, CELL_HEIGHT } from './constants.js';
// import './controls.js';

var CTX = initializeGrid();
var xOffset = 0;

function generateShape() {
	return Shapes[1];
}

function startGame() {
	var shape = generateShape();
	var shapeMod;
	var y = 0;
	var x = 0;
	var shapeTime = setInterval(() => {
		y++;
		clearCanvas();
		shape.map((line, x) => {
			return line.map((item, i) => {
				if(item == 1) {
					console.log('called', line)
					drawUnit(xOffset + i, x + item + y)
				}
				return item + y;
				
			})
		})
		if(y > CELL_HEIGHT -1) {
			console.log(shape)
			clearInterval(shapeTime)
		}
		
	}, 1000);

	
}
var count = 0;
function drawUnit(x,y) {
	CTX.fillStyle = 'red';
	CTX.fillRect(x * UNIT, y * UNIT, UNIT, UNIT);
}

startGame();

function clearCanvas() {
	CTX.clearRect(0, 0, CELL_WIDTH * UNIT, CELL_HEIGHT * UNIT)
}
// var shape1 = Shapes[0];

// var xOffset = 0;

// function drawShape() {
// 	var y = 0;

// 	var move = setInterval(() => {
// 		console.log(xOffset)
// 		y++;
// 		clearCanvas();
// 		shape1 = shape1.map((item, i) => {
// 			return item.map((item,i) => {
// 				console.log('item', item)
// 				drawUnit(i + xOffset, y, 'red');
// 				return [i + xOffset, y]
// 			})
// 		})
// 		if(y == CELL_HEIGHT - 1) {
// 			clearInterval(move)
// 			writeToGrid(shape1)
// 		}
// 	},1000);

// }

// var gameArr = buildGameArr();

// function writeToGrid(shapeToDetach) {
// 	console.log(shapeToDetach)
// 	console.log(gameArr)
// }

// function clearCanvas() {
// 	CTX.clearRect(0, 0, CELL_WIDTH * UNIT, CELL_HEIGHT * UNIT);
// }

// drawShape();

// function drawUnit(x, y, color) {
// 	var posX;
// 	var poxY;

//     posX = x * UNIT;
//     poxY = y * UNIT;
//     colorUnit(color);
//     fillUnit(posX, poxY);
// }

// function colorUnit(color) {
// 	console.log('called', color)
// 	CTX.fillStyle = color;
// }

// function fillUnit(x, y) {
// 	CTX.fillRect(x, y, UNIT, UNIT);
// }





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

