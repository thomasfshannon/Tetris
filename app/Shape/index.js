import pieces from './matrix.js';

function Shape() {
	this.x = 0;
	this.y = 0;
	this.rotationIndex = 0;
	this.currentShape = [];
	this.shapes = pieces;
	this.color;
	this.speed = 100;
	this.list = []
}

Shape.prototype.generateShape = function(num) {
	var rand = Math.floor(Math.random() * this.shapes.length);
	this.currentShape = this.shapes[rand].piece;
	this.color = this.shapes[rand].color;
	return this;
}

Shape.prototype.rotate = function() {
	if(this.rotationIndex < 3) {
		this.rotationIndex++;
	} else {
		this.rotationIndex = 0;
	}	
}

Shape.prototype.getMatrix = function() {
	return this.currentShape[this.rotationIndex];
}

Shape.prototype.getY = function() {
	return this.y;
}

Shape.prototype.getX = function() {
	return this.x;
}

Shape.prototype.shiftLeft = function() {
	return this.x--;
}

Shape.prototype.shiftRight = function() {
	return this.x++;
}

Shape.prototype.descend = function() {
	return this.y++;
}

Shape.prototype.getSpeed = function() {
	return this.speed;
}

Shape.prototype.speedShift = function() {
	this.speed -= 200;
}

Shape.prototype.getCoords = function(mutator) {
	if(mutator == null) {
		mutator = 0;
	}
	let coords = []
	this.getMatrix().forEach((row, y) => {
		row.forEach((item, x) => {
			if(item !== 0) {
				coords.push([x + this.getX() + mutator, y + this.getY()]);
			}
		})
	});
	return coords;
}

Shape.prototype.getRotationCoords = function() {
	let index = this.rotationIndex;
	if(index < 3) {
		index++;
	} else {
		index = 0;
	}

	var coords = [];
	let smallest = 0;

	this.currentShape[index].forEach((row, yIndex) => {
		row.forEach((item, xIndex) => {
			if(item !== 0) {
				let x = xIndex + this.getX();
				let y = yIndex + this.getY();
				smallest = smallest > x ? x : smallest;
				smallest = smallest > y ? y : smallest;
				coords.push([x, y]);
			}
		})
	});
	
	if(smallest < 0) {
		smallest = Math.abs(smallest)
		this.x  = this.x + smallest;
		this.rotationIndex = index;
	}

	return coords;
	
}

export default Shape;

