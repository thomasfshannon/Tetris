// According to the Tetris Concept Wiki's guideline page, 
// http://tetris.wikia.com/wiki/Tetris_Guideline, 
// the playfield is 10 cells wide and at least 22 cells high, with the topmost two hidden.
// array of zeros and ones

import Tetro from './shapes.js';
import { UNIT, CELL_WIDTH, CELL_HEIGHT } from './constants.js';
var ctx;
export function initializeGrid() {
    var c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");
    ctx.canvas.width = 10 * UNIT;
    ctx.canvas.height = 22 * UNIT;
    return ctx;
}





// start game
// make shape
// increment y current shape
// checker array 
// merge shape into array
// comparison as moves downward

