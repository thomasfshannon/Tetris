export const UNIT = 35;
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

const Color = {
	transparent: '#000',
	orange: 'orange',
	blue: 'blue',
	red: 'red',
	lightBlue: 'lightblue',
	yellow: 'yellow',
	magenta: 'magenta',
	green: 'green'
}
export const Colors = [
	Color.transparent,
	Color.orange,
	Color.blue,
	Color.red,
	Color.lightblue,
	Color.yellow,
	Color.magenta,
	Color.green
]