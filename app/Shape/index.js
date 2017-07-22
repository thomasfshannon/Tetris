import pieces from './matrix.js';

function Shape() {
	this.x = 0;
	this.y = 0;
	this.rotationIndex = 0;
	this.currentShape = [];
	this.shapes = pieces
}

Shape.prototype.generateShape = function(num) {
	if(num) {
		this.currentShape = this.shapes[num];
		return this;
	}

	var rand = 2;
	this.currentShape = this.shapes[rand];
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
	if(this.x < 20) {
		return this.x++;
	}
}

Shape.prototype.descend = function() {
	return this.y++;
}

Shape.prototype.getCoords = function() {
	var coords = []
	this.getMatrix().forEach((row, y) => {
		row.forEach((item, x) => {
			if(item !== 0) {
				coords.push([x + this.getX(), y + this.getY()]);
			}
		})
	});
	return coords;
}
export default Shape;

