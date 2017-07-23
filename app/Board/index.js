// According to the Tetris Concept Wiki's guideline page, 
// http://tetris.wikia.com/wiki/Tetris_Guideline, 
// the playfield is 10 cells wide and at least 22 cells high, with the topmost two hidden.
// array of zeros and ones
import { UNIT, CELL_WIDTH, CELL_HEIGHT, CTX, PREVIEW } from '../Constants/index.js';
import Colors from '../colors.js';
import Shape from '../Shape';


function Board() {
	this.shapeList = [{}, {}, {}, {}];
}

Board.prototype.initializeGrid = function() {
	PREVIEW.canvas.width = 4 * UNIT;
	PREVIEW.canvas.height = 5 * UNIT;

	CTX.canvas.width = CELL_WIDTH * UNIT;
	CTX.canvas.height = CELL_HEIGHT * UNIT;
	return CTX;
}

Board.prototype.generateShapeList = function() {
	for(let i = 0; i < this.shapeList.length; i++) {
		let shape = new Shape().generateShape();
		this.shapeList[i] = shape;
	}
}

Board.prototype.grabNextShape = function() {
	let shape = this.shapeList[0];
	this.shapeList = [];
	this.shapeList = [new Shape().generateShape()];
	PREVIEW.clearRect(0, 0, 4 * UNIT, 5 * UNIT)
	this.renderPreview();
	return shape;
}

Board.prototype.renderList = function() {
    let scores = localStorage.getItem('scores');
    if(scores) {
        let str = '';

        JSON.parse(scores).forEach((item, i) => {
            str+=`<li> ${i + 1} - ${Number(item.points).toLocaleString()}</li>`
        });

        str = `<ul>${str}</ul>`;
        document.getElementById('scores').innerHTML = str;
    }
}

const previewArr = 
[
	[0,0,0,0,0],
	[0,0,0,0,0],
	[0,0,0,0,0],
	[0,0,0,0,0]
]

Board.prototype.renderPreview = function() {
	this.shapeList[0].getCoords().forEach((coord) => {
		drawUnit(coord[0], coord[1], this.shapeList[0].color)
	})

}

export function drawUnit(x, y, num) {
	PREVIEW.fillStyle = Colors[num];
	PREVIEW.fillRect(x * UNIT, y * UNIT, UNIT -1, UNIT -1);
}

Board.prototype.buildGameArr = function() {
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

const BOARD = new Board();
export default BOARD;


