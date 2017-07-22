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
				shape.rotate();

				break;
			case 'ArrowDown':
				// 
				break;
			default:
				break;
		}	
	});
}

function handleMove(direction,shape, gameArr) {
	let mutator = direction == 'left' ? -1 : 1;
	var positions = [];
	shape.getMatrix().forEach((row, y) => {
		row.forEach((item, x)=> {
			if(item !== 0) {
				console.log(positions)
				positions.push([x + shape.getX() + mutator, y + shape.getY()]);
			}
		})
	});
	for(var i = 0; i < positions.length; i++) {
		console.log(positions[i][0] > 10)
		if(positions[i][0] < 0 || (positions[i][0] > 9)) return false;
		if(gameArr[positions[i][1]][positions[i][0]]) {
			return false;
		}
	}
	return true;

}

// function collided(shape, gameArr) {
// 	var positions = shape.getCoords();
// 	for(var i = 0; i < positions.length; i++) {
// 		if(gameArr[positions[i][1]][positions[i][0]]) {
// 			return positions;
// 		}
// 	}
	
// }
