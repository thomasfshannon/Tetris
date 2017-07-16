/* l Piece */
var lPiece = [
    [
	    [1, 0, 0],
	    [1, 1, 1],
	    [0, 0, 0]
    ],
    [
	    [0, 1, 1],
	    [0, 1, 0],
	    [0, 1, 0]
    ],
    [
	    [1, 1, 1],
	    [0, 0, 1],
	    [0, 0, 0]
    ],
    [
	    [0, 0, 1],
	    [0, 0, 1],
	    [0, 1, 1]
    ]
];

/* I Piece */
var iPiece = [
    [
	    [0, 0, 0, 0],
	    [1, 1, 1, 1],
	    [0, 0, 0, 0],
	    [0, 0, 0, 0]
    ],
    [
	    [0, 1, 0, 0],
	    [0, 1, 0, 0],
	    [0, 1, 0, 0],
	    [0, 1, 0, 0]
    ],
    [
	    [0, 0, 0, 0],
	    [1, 1, 1, 1],
	    [0, 0, 0, 0],
	    [0, 0, 0, 0]
    ],
    [
	    [0, 1, 0, 0],
	    [0, 1, 0, 0],
	    [0, 1, 0, 0],
	    [0, 1, 0, 0]
    ]
];

/* J Piece */
var jPiece = [
    [
	    [0, 0, 1],
	    [1, 1, 1],
	    [0, 0, 0]
    ],
    [
	    [0, 1, 0],
	    [0, 1, 0],
	    [0, 1, 1]
    ],
    [
	    [1, 1, 1],
	    [1, 0, 0],
	    [0, 0, 0]
    ],
    [
	    [0, 1, 1],
	    [0, 0, 1],
	    [0, 0, 1]
    ]
];

/* O Piece */
var oPiece = [ 
    [
	    [1, 1],
	    [1, 1]
    ],
    [
	    [1, 1],
	    [1, 1]
    ],
    [
	    [1, 1],
	    [1, 1]
    ],
    [
	    [1, 1],
	    [1, 1]
    ]
];

/* S Piece */
var sPiece = [ 
    [
	    [0, 1, 1],
	    [1, 1, 0],
	    [0, 0, 0]
    ],
    [
	    [0, 1, 0],
	    [0, 1, 1],
	    [0, 0, 1]
    ],
    [
	    [0, 0, 0],
	    [0, 1, 1],
	    [1, 1, 0]
    ],
    [
	    [1, 0, 0],
	    [1, 1, 0],
	    [0, 1, 0]
    ]
];


/* T Piece */
var tPiece = [
    [
	    [0, 1, 0],
	    [1, 1, 1],
	    [0, 0, 0]
    ],
    [
	    [0, 1, 0],
	    [0, 1, 1],
	    [0, 1, 0]
    ],
    [
	    [0, 0, 0],
	    [1, 1, 1],
	    [0, 1, 0]
    ],
    [
	    [0, 1, 0],
	    [1, 1, 0],
	    [0, 1, 0]
    ]
];

/* Z Piece */
var zPiece = [
    [
	    [1, 1, 0],
	    [0, 1, 1],
	    [0, 0, 0]
    ],
    [
	    [0, 0, 1],
	    [0, 1, 1],
	    [0, 1, 0]
    ],
    [
	    [0, 0, 0],
	    [1, 1, 0],
	    [0, 1, 1]
    ],
    [
	    [0, 1, 0],
	    [1, 1, 0],
	    [1, 0, 0]
    ]
];

function Shape() {
	this.x = 0;
	this.y = 0;
	this.rotationIndex = 0;
	this.currentShape = [];
	this.shapes = [lPiece, iPiece, jPiece, oPiece, sPiece, tPiece, zPiece]
}

Shape.prototype.generateShape = function(num) {
	if(num) {
		this.currentShape = this.shapes[num];
		return this;
	}

	var rand = Math.ceil(Math.random() * this.shapes.length) -1;
	this.currentShape = this.shapes[rand];
	return this;
}

Shape.prototype.rotate = function() {
	if(rotationIndex > this.shapes.length - 1) {
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

Shape.prototype.descend = function() {
	return this.y++;
}
export default Shape;

