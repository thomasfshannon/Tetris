export const UNIT = 20;
export const CELL_WIDTH = 10;
export const CELL_HEIGHT = 22;

var c = document.getElementById("myCanvas");
export const CTX = c.getContext("2d");

export const SHAPES = [
	"drawSquare",
	"drawLine",
	"drawLeftStair",
	"drawRightStair",
	"drawCenterPiece"
];