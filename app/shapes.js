import { UNIT, CTX } from './constants.js';

function drawSquare(xShift = 0, yShift = 0) {
	var square = [
		[0,0],
		[1,1],
		[1,0],
		[0,1]
	];

	square.forEach((item) => {
		drawUnit(item[0] + xShift, item[1] + yShift, '#ff0000');
	});
	

}

function drawLine(xShift = 0, yShift = 0) {
	var line = [
		[0,0],
		[0,1],
		[0,2],
		[0,3]
	];

	line.forEach((item) => {
		drawUnit(item[0] + xShift, item[1] + yShift, '#ff0000');
	});
}

function drawLeftStair(xShift = 0, yShift = 0) {
	var leftStair = [
		[1,0],
		[1,1],
		[0,1],
		[0,2]
	];

	leftStair.forEach((item) => {
		drawUnit(item[0] + xShift, item[1] + yShift, '#ff0000');
	});
}

function drawRightStair(xShift = 0, yShift = 0) {
	var rightStair = [
		[0,0],
		[1,1],
		[0,1],
		[1,2]
	];
	
	rightStair.forEach((item) => {
		drawUnit(item[0] + xShift, item[1] + yShift, '#ff0000');
	});
}

function drawCenterPiece(xShift = 0, yShift = 0) {
	var centerPiece = [
		[0,0],
		[0,1],
		[1,1],
		[0,2]
	]
	centerPiece.forEach((item) => {
		drawUnit(item[0] + xShift, item[1] + yShift, '#ff0000');
	});
}

function drawUnit(x, y, color) {
	var posX;
	var poxY;

    posX = x * UNIT;
    poxY = y * UNIT;
    colorUnit(color);
    fillUnit(posX, poxY);
}

function colorUnit(color) {
	CTX.fillStyle = color;
}

function fillUnit(x, y) {
	CTX.fillRect(x, y, UNIT, UNIT);
}



export default {
	drawSquare,
	drawLine,
	drawLeftStair,
	drawRightStair,
	drawCenterPiece
}