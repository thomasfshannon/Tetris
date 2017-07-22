// According to the Tetris Concept Wiki's guideline page, 
// http://tetris.wikia.com/wiki/Tetris_Guideline, 
// the playfield is 10 cells wide and at least 22 cells high, with the topmost two hidden.
// array of zeros and ones
import { UNIT, CELL_WIDTH, CELL_HEIGHT, CTX } from '../Constants/index.js';


export function initializeGrid() {
    CTX.canvas.width = CELL_WIDTH * UNIT;
    CTX.canvas.height = CELL_HEIGHT * UNIT;
    return CTX;
}

export function buildGameArr() {
	return [
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[1,1,1,1,1,1,1,1,1,1]
	]  
}


// [1,1,1,1,1,1,1,1,1,1],


