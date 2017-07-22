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
				if(handleMove('rotate', shape, gameArr)) {
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
	return checkIfValidMove(gameArr,positions)

}

function checkIfValidMove(gameArr, positions) {
	for(let i = 0; i < positions.length; i++) {

		if(positions[i][0] < 0 || (positions[i][0] > 9)) {
			return false;
		}

		if(gameArr[positions[i][1]][positions[i][0]]) {
			return false;
		}
		
	}
	return true;
}

function handleDown() {
	return true;
}

// check rotation on boundaries

