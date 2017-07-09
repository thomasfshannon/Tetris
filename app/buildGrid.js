// According to the Tetris Concept Wiki's guideline page, 
// http://tetris.wikia.com/wiki/Tetris_Guideline, 
// the playfield is 10 cells wide and at least 22 cells high, with the topmost two hidden.
// array of zeros and ones
import { UNIT, CELL_WIDTH, CELL_HEIGHT, CTX } from './constants.js';
import Shapes from './shapes.js';

export function initializeGrid() {
    CTX.canvas.width = CELL_WIDTH * UNIT;
    CTX.canvas.height = CELL_HEIGHT * UNIT;
    return CTX;
}


function buildGameArr() {
	var gameBoard = [];
	for (var y = 0; y < CELL_HEIGHT; y++) {
		gameBoard.push([]);

		for (var x = 0; x < CELL_WIDTH; x++){
		    gameBoard[y].push(0);
		}
	}

	return gameBoard;    
}

var gameArr = buildGameArr();

function mergePieceIntoArray() {
	var shape = Shapes[0];
	console.log('a',shape);
	// offset variable
	// offSet X

	shape.forEach((item, i) => {
		gameArr[i] = [...item, ...gameArr[i].slice(item.length)];
	});	
}

mergePieceIntoArray()






// start game
// make shape
// increment y current shape
// checker array 
// merge shape into array
// comparison as moves downward

