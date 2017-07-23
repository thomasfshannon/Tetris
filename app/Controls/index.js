import { collided } from '../Board/mutators.js';

export function bindController(shape, gameArr) {
	document.addEventListener('keydown', function(e) {
		switch(e.code) {
			case 'ArrowLeft':
				if(handleMove('left',shape, gameArr)) {
					shape.shiftLeft();
				}
				break;
			case 'ArrowRight':
				if(handleMove('right',shape, gameArr)) {
					shape.shiftRight();
				}
				break;
			case 'ArrowUp':
				if(checkIfValidMove(shape.getRotationCoords(), gameArr)) {
					shape.rotate();
				}
				break;
			case 'ArrowDown':
				if(handleDown()) {
					shape.speedShift();
				}
				break;
			default:
				break;
		}	
	});
}

function handleMove(direction, shape, gameArr) {
	let mutator;
	if(direction == 'left') {
		mutator = -1;
	}
	if(direction == 'right') {
		mutator = 1;
	}
	if(direction == 'rotate') {
		mutator = 0;
	}

	let positions = shape.getCoords(mutator);
	return checkIfValidMove(positions, gameArr)

}

function checkIfValidMove(positions, gameArr) {
	let results = positions.every((coords, i) => {
		console.log('at x',coords[0] >= 0)
		return (9 >= coords[0] && coords[0] >= 0)
	});
	return results;
}

// shape get potential rotation easy for other one just mutated x
// now need to shift curr index and call checkIfValid


function handleDown() {
	return true;
}

// check rotation on boundaries

